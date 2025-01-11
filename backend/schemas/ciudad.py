from typing import Optional
from pydantic import BaseModel
from schemas.region import Region

class Ciudad(BaseModel):
    id: Optional[int] = None
    nombre: str
    id_region: Region