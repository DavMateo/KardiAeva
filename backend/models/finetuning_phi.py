import os
import torch
from datasets import load_dataset, Dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    TrainingArguments,
    Trainer,
    DataCollatorForLanguageModeling,
    TrainerCallback,
    __version__
)
import wandb
import logging
from typing import Dict, Sequence
import numpy as np
from sklearn.metrics import accuracy_score, precision_recall_fscore_support, f1_score
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.model_selection import train_test_split
import evaluate
from tqdm.auto import tqdm


dir_base = '/home/mateo/Documentos/cursoIA/semana2/KardiAeva_final_project/backend/models/microsoft_phi3_5'
torch.cuda.is_available = lambda: False
os.environ["CUDA_VISIBLE_DEVICES"] = ""


# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(f'{dir_base}/medical_training.log'),
        logging.StreamHandler()
    ]
)

class ConversationalDatasetPreprocessor:
    def __init__(self, tokenizer, max_length=1024):
        self.tokenizer = tokenizer
        self.max_length = max_length

    def format_conversation(self, example: Dict) -> str:
        """
        Formatea una conversación usando los campos system, question y chosen
        """
        # Asegurarse de que todos los campos existan
        system = example.get('system', '')
        question = example.get('question', '')
        chosen = example.get('chosen', '')
        
        # Formatear la conversación
        conversation = f"<|system|>{system}\n"
        conversation += f"<|human|>{question}\n"
        conversation += f"<|assistant|>{chosen}"
        
        return conversation

    def preprocess_function(self, examples: Dict) -> Dict:
        """
        Preprocesa un batch de ejemplos
        """
        # Formatear las conversaciones
        conversations = [
            self.format_conversation({"system": s, "question": q, "chosen": c})
            for s, q, c in zip(
                examples.get("system", [""] * len(examples["question"])),
                examples.get("question", [""] * len(examples["question"])),
                examples.get("chosen", [""] * len(examples["question"])),
            )
        ]
        
        # Tokenizar
        tokenized = self.tokenizer(
            conversations,
            truncation=True,
            max_length=self.max_length,
            padding='max_length',
            return_tensors="pt"
        )
        
        # Preparar labels
        tokenized["labels"] = tokenized["input_ids"].clone()
        
        return tokenized

def print_training_metrics(metrics: Dict):
    """
    Imprime métricas de entrenamiento de forma legible
    """
    logging.info("\n" + "="*50)
    logging.info("Métricas de entrenamiento:")
    for key, value in metrics.items():
        if isinstance(value, (int, float)):
            logging.info(f"{key}: {value:.4f}")
        else:
            logging.info(f"{key}: {value}")
    logging.info("="*50 + "\n")

def compute_metrics(eval_preds):
    """
    Calcula métricas detalladas de evaluación
    """
    logits, labels = eval_preds
    predictions = np.argmax(logits, axis=-1)
    
    # Calcular perplejidad
    metric = evaluate.load("perplexity")
    try:
        perplexity = metric.compute(predictions=predictions, references=labels)["perplexity"]
        
    except Exception as e:
        logging.warning(f"Error al calcular perplejidad: {e}")
        perplexity = float('inf')
    
    # Preparar datos para métricas ignorando padding
    valid_mask = labels != -100
    valid_predictions = predictions[valid_mask]
    valid_labels = labels[valid_mask]
    
    # Calcular métricas básicas
    precision, recall, f1, _ = precision_recall_fscore_support(
        valid_labels, 
        valid_predictions, 
        average='weighted'
    )
    
    # Accuracy
    accuracy = accuracy_score(valid_labels, valid_predictions)
    
    # Crear reporte de clasificación
    try:
        class_report = classification_report(valid_labels, valid_predictions)
        logging.info("\nReporte de clasificación detallado:")
        logging.info(class_report)
    except:
        logging.warning("No se pudo generar el reporte de clasificación detallado")
    
    metrics = {
        "perplexity": perplexity,
        "accuracy": accuracy,
        "precision": precision,
        "recall": recall,
        "f1": f1,
    }
    
    print_training_metrics(metrics)
    
    return metrics

class MetricsCallback(TrainerCallback):
    def on_log(self, args, state, control, logs=None, **kwargs):
        if logs:
            print_training_metrics(logs)

def main():
    # Configuración de CPU
    torch.set_num_threads(8)
    torch.set_default_tensor_type(torch.FloatTensor)
    
    # Configuración inicial
    MODEL_NAME = "microsoft/Phi-3.5-mini-instruct"
    DATASET_NAME = "Danielbrdz/Barcenas-Medicina-DPO"
    OUTPUT_DIR = f"{dir_base}/phi_medical_model"
    
    # Parámetros de entrenamiento optimizados
    training_args = TrainingArguments(
        output_dir=OUTPUT_DIR,
        num_train_epochs=4,
        per_device_train_batch_size=1,
        per_device_eval_batch_size=1,
        warmup_steps=500,
        weight_decay=0.01,
        logging_dir=f'./logs',
        logging_steps=500,
        evaluation_strategy="steps",
        eval_steps=500,
        save_strategy="steps",
        save_steps=500,
        learning_rate=2e-5,
        fp16=False,
        no_cuda=True,
        use_cpu=True,
        gradient_accumulation_steps=8,
        gradient_checkpointing=True,
        load_best_model_at_end=True,
        metric_for_best_model="f1",  # Cambiado a F1 como métrica principal
        greater_is_better=True,
        report_to="wandb",
        remove_unused_columns=False,  # Importante para evitar errores con columnas adicionales
        max_grad_norm=0.5,
        optim='adafactor'
    )

    # Inicializar wandb
    wandb.init(project="phi-medical-finetuning", name="phi-3.5-medical-conversation")

    try:
        # Cargar tokenizer y modelo
        logging.info("Cargando tokenizer y modelo...")
        tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME, trust_remote_code=True)
        tokenizer.pad_token = tokenizer.eos_token
        
        model = AutoModelForCausalLM.from_pretrained(
            MODEL_NAME,
            trust_remote_code=True,
            torch_dtype=torch.float32,
            device_map="cpu"
        )
        model.to("cpu")

        # Cargar dataset
        logging.info("Cargando dataset...")
        dataset = load_dataset(DATASET_NAME)
        
        # Verificación del dataset
        required_columns = ["system", "question", "chosen"]
        for split in dataset.keys():
            if not all(col in dataset[split].column_names for col in required_columns):
                raise ValueError(f"El dataset {split} no tiene las columnas necesarias: {required_columns}")
        
        # Mostrar información del dataset
        logging.info("\nInformación del dataset:")
        for split in dataset.keys():
            logging.info(f"{split}: {len(dataset[split])} ejemplos")
        
        # Crear procesador de datos
        preprocessor = ConversationalDatasetPreprocessor(tokenizer)
        
        # Convertir a listas de diccionarios
        train_test_data = dataset["train"].shuffle(seed=42)
        
        # Obtener una lista de diccionarios individuales por cada ejemplo
        train_examples = [example for example in train_test_data]
        
        # Dividir el dataset
        train_examples, temp_examples = train_test_split(train_examples, test_size=0.2, random_state=42)
        eval_examples, test_examples = train_test_split(temp_examples, test_size=0.5, random_state=42)
        
        # Convertir los datasets a formato Dataset de Hugging Face
        train_dataset = Dataset.from_list(train_examples)
        eval_dataset = Dataset.from_list(eval_examples)
        test_dataset = Dataset.from_list(test_examples)
        
        # Procesar datasets con barra de progreso
        logging.info("\nProcesando datasets...")
        processed_train_dataset = train_dataset.map(
            preprocessor.preprocess_function,
            batched=True,
            remove_columns=train_dataset.column_names,
            desc="Procesando entrenamiento"
        )
        
        #processed_train_dataset = {}
        #for split in dataset.keys():
        #    processed_train_dataset[split] = train_dataset[split].map(
        #        preprocessor.preprocess_function,
        #        batched=True,
        #        remove_columns=train_dataset[split].column_names,
        #        desc=f"Procesando entrenamiento: {split}"
        #    )
        
        processed_eval_dataset = eval_dataset.map(
            preprocessor.preprocess_function,
            batched=True,
            remove_columns=eval_dataset.column_names,
            desc="Procesamiento evaluación"
        )
        
        #processed_eval_dataset = {}
        #for split in dataset.keys():
        #    processed_eval_dataset[split] = eval_dataset[split].map(
        #        preprocessor.preprocess_function,
        #        batched=True,
        #        remove_columns=eval_dataset[split].column_names,
        #        desc=f"Procesando evaluación: {split}"
        #    )
        
        processed_test_dataset = test_dataset.map(
            preprocessor.preprocess_function,
            batched=True,
            remove_columns=test_dataset.column_names,
            desc="Procesando prueba"
        )
        
        #processed_test_dataset = {}
        #for split in dataset.keys():
        #    processed_test_dataset[split] = test_dataset[split].map(
        #        preprocessor.preprocess_function,
        #        batched=True,
        #        remove_columns=test_dataset[split].column_names,
        #        desc=f"Procesando prueba: {split}"
        #    )

        # Configurar data collator
        data_collator = DataCollatorForLanguageModeling(
            tokenizer=tokenizer,
            mlm=False
        )

        # Inicializar Trainer con callback de métricas
        trainer = Trainer(
            model=model,
            args=training_args,
            train_dataset=processed_train_dataset,
            #eval_dataset=processed_train_dataset["validation"] if "validation" in processed_train_dataset else None,
            eval_dataset=eval_dataset,
            data_collator=data_collator,
            compute_metrics=compute_metrics,
            callbacks=[MetricsCallback]
        )

        # Entrenar modelo
        logging.info("\nIniciando entrenamiento...")
        trainer.train()

        # Guardar modelo
        logging.info("\nGuardando modelo final...")
        trainer.save_model(OUTPUT_DIR)
        tokenizer.save_pretrained(OUTPUT_DIR)

        # Evaluar modelo
        if processed_test_dataset:
            logging.info("\nEvaluando modelo en conjunto de prueba...")
            test_results = trainer.evaluate(processed_test_dataset["test"])
            logging.info("\nResultados finales en conjunto de prueba:")
            print_training_metrics(test_results)

    except Exception as e:
        logging.error(f"\nError durante el entrenamiento: {str(e)}")
        raise

    finally:
        wandb.finish()

if __name__ == "__main__":
    main()