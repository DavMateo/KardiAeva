from typing import Optional
from pydantic import BaseModel

class Lugar_cita_medica(BaseModel):
    id: Optional[int] = None
    nombre_centro_medico: str
    direccion: str