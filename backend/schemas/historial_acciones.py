from typing import Optional
from pydantic import BaseModel, datetime_parse
from schemas.usuario import Usuario

class Historial_acciones(BaseModel):
    id: Optional[int] = None
    accion: str
    fecha_registro: datetime_parse
    id_usuario: Usuario