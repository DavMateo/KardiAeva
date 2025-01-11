import json
import wandb
import numpy as np
from datasets import Dataset
from transformers import (
    PegasusForConditionalGeneration,
    PegasusTokenizer,
    Seq2SeqTrainingArguments,
    Seq2SeqTrainer,
    DataCollatorForSeq2Seq
)
import evaluate
import torch
from typing import Dict, List
import random
import os

# Inicializar wandb
wandb.init(project="pegasus-spanish-summarization", name="entrenamiento-inicial")

# Define a random seed for reproducibility
seed = 42
random.seed(seed)
os.environ['PYTHONHASHSEED'] = str(seed)
np.random.seed(seed)
torch.manual_seed(seed)
torch.cuda.manual_seed(seed)
torch.cuda.manual_seed_all(seed)
torch.backends.cudnn.deterministic = True
torch.backends.cudnn.benchmark = False


# Cargar el modelo y tokenizer
model_name = "google/pegasus-xsum"
tokenizer = PegasusTokenizer.from_pretrained(model_name)
model = PegasusForConditionalGeneration.from_pretrained(model_name)

# Cargar y preparar datos
def load_data(file_path: str) -> Dict[str, List[str]]:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Adjust the filtering logic to include a broader range of data samples
    # and avoid extremely long sequences.
    filtered_data = {
        'text': [],
        'summary': []
    }
    
    for item in data:
        text = item['text']
        summary = item['summary']
        # Relaxed filtering condition for text length
        if len(text) > 512 and len(summary) <= 300:  
            filtered_data['text'].append(text)
            filtered_data['summary'].append(summary)
    
    return filtered_data

# Cargar dataset
data = load_data('resumen_pegasus.json')
dataset = Dataset.from_dict(data)

# Función de preprocesamiento
def preprocess_function(examples):
    inputs = examples['text']
    targets = examples['summary']
    
    model_inputs = tokenizer(
        inputs,
        max_length=512,  # Reduced max_length for input
        padding='max_length',
        truncation=True
    )
    
    # Add the 'decoder_input_ids' key to the model inputs
    # This is required for PegasusForConditionalGeneration during training
    with tokenizer.as_target_tokenizer():
        labels = tokenizer(
            targets,
            max_length=128,
            padding='max_length',
            truncation=True
        )    
    model_inputs["labels"] = labels["input_ids"]
    
    return model_inputs

# Preprocesar dataset
tokenized_dataset = dataset.map(
    preprocess_function,
    batched=True,
    remove_columns=dataset.column_names
)

# Dividir dataset
train_test_split = tokenized_dataset.train_test_split(test_size=0.1, seed=seed)

# Métrica ROUGE
rouge = evaluate.load('rouge')

def compute_metrics(eval_pred):
    predictions, labels = eval_pred
    decoded_preds = tokenizer.batch_decode(predictions, skip_special_tokens=True)
    labels = np.where(labels != -100, labels, tokenizer.pad_token_id)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=True)
    
    result = rouge.compute(
        predictions=decoded_preds,
        references=decoded_labels,
        use_stemmer=True
    )
    
    return {
        'rouge1': result['rouge1'],
        'rouge2': result['rouge2'],
        'rougeL': result['rougeL']
    }

# Configuración del entrenamiento
training_args = Seq2SeqTrainingArguments(
    output_dir="./pegasus_output",
    num_train_epochs=20,
    per_device_train_batch_size=24,
    per_device_eval_batch_size=24,
    weight_decay=0.01,
    logging_dir='./logs',
    logging_steps=10,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    logging_strategy="epoch",
    load_best_model_at_end=True,
    metric_for_best_model="rouge2",
    report_to=["wandb"],
    predict_with_generate=True,
    fp16=True,  # Habilitar precisión mixta para A100
    learning_rate=5e-5,
    seed=seed  # Add the seed to the training arguments for reproducibility
)

# Preparar el data collator
data_collator = DataCollatorForSeq2Seq(
    tokenizer=tokenizer,
    model=model,
    padding=True
)

# Inicializar el trainer
trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=train_test_split['train'],
    eval_dataset=train_test_split['test'],
    tokenizer=tokenizer,
    data_collator=data_collator,
    compute_metrics=compute_metrics
)

# Entrenar el modelo
trainer.train()

# Guardar el modelo entrenado
model.save_pretrained("./pegasus_output/final")
tokenizer.save_pretrained("./pegasus_output/final")

# Finalizar wandb
wandb.finish()