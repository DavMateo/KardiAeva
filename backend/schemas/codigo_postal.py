from typing import Optional
from pydantic import BaseModel
from schemas.ciudad import Ciudad

class Codigo_postal(BaseModel):
    id: Optional[int] = None
    codigo: str
    id_ciudad: Ciudad