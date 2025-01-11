from typing import Optional
from pydantic import BaseModel

class Estado(BaseModel):
    id: Optional[int] = None
    nombre: str
    descripcion: Optional[str] = None