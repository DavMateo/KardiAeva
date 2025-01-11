import json
import torch
import wandb
from transformers import (
    BartForConditionalGeneration,
    AutoTokenizer,
    Trainer,
    TrainingArguments
)
from datasets import Dataset
from sklearn.model_selection import train_test_split

# Configuración de wandb
wandb.init(project="medical-summarization", name="bart-pegasus-training")

# Configuración de dispositivo
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
print(f"Using device: {device}")

def load_dataset(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

# Función para preparar el dataset
def prepare_dataset(data, tokenizer, max_input_length=1024, max_target_length=256):
    def preprocess_function(examples):
        inputs = tokenizer(
            examples['text'],
            max_length=max_input_length,
            truncation=True,
            padding='max_length',
            return_tensors="pt"
        )
        
        targets = tokenizer(
            examples['summary'],
            max_length=max_target_length,
            truncation=True,
            padding='max_length',
            return_tensors="pt"
        )
        
        return {
            'input_ids': inputs['input_ids'],
            'attention_mask': inputs['attention_mask'],
            'labels': targets['input_ids']
        }
    
    dataset = Dataset.from_dict({
        'text': [item['text'] for item in data],
        'summary': [item['summary'] for item in data]
    })
    
    return dataset.map(
        preprocess_function,
        batched=True,
        remove_columns=dataset.column_names
    )

# Función de entrenamiento para cada modelo
def train_model(model_name, dataset_path, output_dir):
    print(f"\nEntrenando modelo {model_name}")
    
    # Cargar modelo y tokenizer
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model_class = BartForConditionalGeneration
    model = model_class.from_pretrained(model_name).to(device)
    
    # Cargar y preparar dataset
    data = load_dataset(dataset_path)
    
    # Dividir en train y validation
    train_data, val_data = train_test_split(data, test_size=0.1, random_state=42)
    
    # Preparar datasets
    train_dataset = prepare_dataset(train_data, tokenizer)
    val_dataset = prepare_dataset(val_data, tokenizer)
    
    # Configurar argumentos de entrenamiento
    training_args = TrainingArguments(
        output_dir=output_dir,
        num_train_epochs=20,
        per_device_train_batch_size=12,
        per_device_eval_batch_size=12,
        warmup_steps=500,
        weight_decay=0.01,
        logging_dir='./logs',
        logging_steps=10,
        evaluation_strategy="steps",
        eval_steps=50,
        save_steps=50,
        load_best_model_at_end=True,
        metric_for_best_model="eval_loss",
        greater_is_better=True,
        report_to="wandb",
        gradient_accumulation_steps=4,
        fp16=True,  # Usar precisión mixta para optimizar memoria
        learning_rate=5e-5
    )
    
    # Inicializar trainer
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_dataset,
        eval_dataset=val_dataset,
    )
    
    # Entrenar modelo
    trainer.train()
    
    # Guardar modelo
    model.save_pretrained(f"{output_dir}/final")
    tokenizer.save_pretrained(f"{output_dir}/final")
    
    return model, tokenizer

# Entrenar BART
bart_model, bart_tokenizer = train_model(
    'facebook/bart-large-cnn',
    'resumen_medicos.json',
    'bart_output'
)

wandb.finish()