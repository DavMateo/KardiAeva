import json
import torch
from torch.utils.data import Dataset, DataLoader
from transformers import BertTokenizer, BertForSequenceClassification
from transformers import AdamW, get_linear_schedule_with_warmup
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import numpy as np
from tqdm import tqdm
import logging
import wandb
import os
from collections import Counter

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('training.log'),
        logging.StreamHandler()
    ]
)

# Clase para el dataset personalizado
class MedicalDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_length=512):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_length = max_length

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, idx):
        text = str(self.texts[idx])
        label = self.labels[idx]

        encoding = self.tokenizer.encode_plus(
            text,
            add_special_tokens=True,
            max_length=self.max_length,
            return_token_type_ids=True,
            padding='max_length',
            truncation=True,
            return_attention_mask=True,
            return_tensors='pt'
        )

        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'token_type_ids': encoding['token_type_ids'].flatten(),
            'labels': torch.tensor(label, dtype=torch.long)
        }

def load_and_clean_data(file_path, min_samples_per_class=2):
    """
    Carga y limpia los datos, asegurando un mínimo de muestras por clase
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Contar muestras por categoría
    category_counts = Counter(item['categoria'] for item in data)
    
    # Filtrar categorías con suficientes muestras
    valid_categories = {cat for cat, count in category_counts.items() if count >= min_samples_per_class}
    
    # Filtrar datos
    filtered_data = [item for item in data if item['categoria'] in valid_categories]
    
    texts = [item['texto'] for item in filtered_data]
    labels = [item['categoria'] for item in filtered_data]
    
    # Informar sobre el proceso de limpieza
    logging.info(f"Distribución original de categorías: {dict(category_counts)}")
    logging.info(f"Categorías válidas: {valid_categories}")
    logging.info(f"Total de muestras después de la limpieza: {len(texts)}")
    
    return texts, labels

def train_epoch(model, data_loader, optimizer, scheduler, device):
    model.train()
    total_loss = 0
    correct_predictions = 0
    total_predictions = 0

    progress_bar = tqdm(data_loader, desc='Training')
    
    for batch in progress_bar:
        optimizer.zero_grad()
        
        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        token_type_ids = batch['token_type_ids'].to(device)
        labels = batch['labels'].to(device)

        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
            labels=labels
        )

        loss = outputs.loss
        logits = outputs.logits
        
        total_loss += loss.item()
        
        _, predicted = torch.max(logits, 1)
        correct_predictions += (predicted == labels).sum().item()
        total_predictions += labels.size(0)
        
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        optimizer.step()
        scheduler.step()
        
        progress_bar.set_postfix({'loss': loss.item()})

    return total_loss / len(data_loader), correct_predictions / total_predictions

def evaluate(model, data_loader, device):
    model.eval()
    total_loss = 0
    correct_predictions = 0
    total_predictions = 0
    
    with torch.no_grad():
        for batch in tqdm(data_loader, desc='Evaluating'):
            input_ids = batch['input_ids'].to(device)
            attention_mask = batch['attention_mask'].to(device)
            token_type_ids = batch['token_type_ids'].to(device)
            labels = batch['labels'].to(device)

            outputs = model(
                input_ids=input_ids,
                attention_mask=attention_mask,
                token_type_ids=token_type_ids,
                labels=labels
            )
            
            loss = outputs.loss
            logits = outputs.logits
            
            total_loss += loss.item()
            
            _, predicted = torch.max(logits, 1)
            correct_predictions += (predicted == labels).sum().item()
            total_predictions += labels.size(0)
    
    return total_loss / len(data_loader), correct_predictions / total_predictions

def main():
    # Configuración de wandb para seguimiento de experimentos
    wandb.init(project="medical-bert-classification", name="fine-tuning-experiment")
    
    # Parámetros de entrenamiento
    MAX_LENGTH = 256
    TRAIN_BATCH_SIZE = 8
    VALID_BATCH_SIZE = 8
    EPOCHS = 5
    LEARNING_RATE = 2e-5
    WARMUP_STEPS = 0
    DEVICE = "cpu"
    MIN_SAMPLES_PER_CLASS = 2
    
    logging.info(f"Using device: {DEVICE}")
    
    # Cargar y preparar datos con el nuevo método de limpieza
    texts, labels = load_and_clean_data('/home/mateo/Documentos/cursoIA/semana2/KardiAeva_final_project/backend/models/datasets/dataset_from_csv.json', MIN_SAMPLES_PER_CLASS)
    
    # Verificar si hay suficientes datos después de la limpieza
    if len(texts) < 2:
        logging.error("No hay suficientes datos para entrenar después de la limpieza")
        return
    
    label_encoder = LabelEncoder()
    encoded_labels = label_encoder.fit_transform(labels)
    
    # Dividir datos en entrenamiento y validación
    try:
        train_texts, val_texts, train_labels, val_labels = train_test_split(
            texts, encoded_labels, test_size=0.2, random_state=42, stratify=encoded_labels
        )
    except ValueError as e:
        logging.warning("No se pudo realizar la división estratificada. Realizando división simple.")
        train_texts, val_texts, train_labels, val_labels = train_test_split(
            texts, encoded_labels, test_size=0.2, random_state=42
        )
    
    # Inicializar tokenizer y modelo
    tokenizer = BertTokenizer.from_pretrained('bert-base-multilingual-cased')
    model = BertForSequenceClassification.from_pretrained(
        'bert-base-multilingual-cased',
        num_labels=len(label_encoder.classes_)
    )
    model.to(DEVICE)
    
    # Crear datasets y dataloaders
    train_dataset = MedicalDataset(train_texts, train_labels, tokenizer, MAX_LENGTH)
    val_dataset = MedicalDataset(val_texts, val_labels, tokenizer, MAX_LENGTH)
    
    train_loader = DataLoader(train_dataset, batch_size=TRAIN_BATCH_SIZE, shuffle=True)
    val_loader = DataLoader(val_dataset, batch_size=VALID_BATCH_SIZE)
    
    # Preparar optimizador y scheduler
    optimizer = AdamW(model.parameters(), lr=LEARNING_RATE, correct_bias=False)
    total_steps = len(train_loader) * EPOCHS
    scheduler = get_linear_schedule_with_warmup(
        optimizer,
        num_warmup_steps=WARMUP_STEPS,
        num_training_steps=total_steps
    )
    
    # Entrenamiento
    best_accuracy = 0
    
    for epoch in range(EPOCHS):
        logging.info(f"Epoch {epoch + 1}/{EPOCHS}")
        
        train_loss, train_acc = train_epoch(model, train_loader, optimizer, scheduler, DEVICE)
        val_loss, val_acc = evaluate(model, val_loader, DEVICE)
        
        logging.info(f"Train Loss: {train_loss:.4f}, Train Accuracy: {train_acc:.4f}")
        logging.info(f"Val Loss: {val_loss:.4f}, Val Accuracy: {val_acc:.4f}")
        
        # Logging con wandb
        wandb.log({
            "train_loss": train_loss,
            "train_accuracy": train_acc,
            "val_loss": val_loss,
            "val_accuracy": val_acc
        })
        
        # Guardar mejor modelo
        if val_acc > best_accuracy:
            best_accuracy = val_acc
            model_path = os.path.join("models", "best_model")
            os.makedirs("models", exist_ok=True)
            model.save_pretrained(model_path)
            tokenizer.save_pretrained(model_path)
            logging.info(f"Mejor modelo guardado con accuracy: {best_accuracy:.4f}")

    wandb.finish()
    logging.info("Entrenamiento completado")

if __name__ == "__main__":
    main()