from typing import Optional
from pydantic import BaseModel

class Sintomas(BaseModel):
    id: Optional[int] = None
    nombre: str
    descripcion: str