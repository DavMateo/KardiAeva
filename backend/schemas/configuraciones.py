from typing import Optional
from pydantic import BaseModel
from schemas.usuario import Usuario

class Configuraciones(BaseModel):
    id: Optional[int] = None
    notificaciones: str
    tema: str
    idioma: str
    id_usuario: Usuario