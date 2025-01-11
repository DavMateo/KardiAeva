from typing import Optional
from pydantic import BaseModel

class Extension_documento(BaseModel):
    id: Optional[int] = None
    nombre: str