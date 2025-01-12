from fastapi import APIRouter
from backend.models.usuario import usuario
from backend.schemas.usuario import Usuario
from backend.config.db import conn


# Definiendo el conjunto de APIs
user = APIRouter()


# Creando el endpoint GET '/user'
@user.get('/', response_model=dict[Usuario], tags=["usuario"])
def get_usuario():
    return conn.execute(usuario.select()).fetchall()