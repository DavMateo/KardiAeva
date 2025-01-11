from typing import Optional
from pydantic import BaseModel

class Tipo_dosis(BaseModel):
    id: Optional[int] = None
    nombre: str
    descripcion: Optional[str] = None