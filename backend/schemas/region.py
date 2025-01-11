from typing import Optional
from pydantic import BaseModel
from schemas.pais import Pais

class Region(BaseModel):
    id: Optional[int] = None
    nombre: str
    id_pais: Pais