from typing import Optional
from pydantic import BaseModel

class Nombre_completo(BaseModel):
    id: Optional[int] = None
    primer_nombre: str
    segundo_nombre: Optional[str] = None
    primer_apellido: str
    segundo_apellido: Optional[str] = None