from typing import Optional
from pydantic import BaseModel

class Pais(BaseModel):
    id: Optional[int] = None
    nombre: str
    prefijo: Optional[str] = None
    sufijo: str
    moneda: Optional[str] = None