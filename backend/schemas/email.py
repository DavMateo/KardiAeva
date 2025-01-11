from typing import Optional
from pydantic import BaseModel

class Email(BaseModel):
    id: Optional[int] = None
    nombre_usuario: str
    organizacion: str
    tipo: str