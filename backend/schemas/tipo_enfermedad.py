from typing import Optional
from pydantic import BaseModel

class Tipo_enfermedad(BaseModel):
    id: Optional[int] = None
    nombre: str
    descripcion: str