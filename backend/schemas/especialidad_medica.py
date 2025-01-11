from typing import Optional
from pydantic import BaseModel

class Especialidad_medica(BaseModel):
    id: Optional[int] = None
    nombre: str
    descripcion: Optional[str] = None