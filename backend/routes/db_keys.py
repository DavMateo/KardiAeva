from fastapi import APIRouter, HTTPException
from backend.config.db import configurar_motor_db
from backend.schemas.db_credenciales import DBCredenciales


# Crear el router
config = APIRouter()


# Configurando el endpoint
@config.post("/dbkey")
def configurar_db(credenciales: DBCredenciales):
    try:
        response = configurar_motor_db(credenciales)
        return response
    
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))