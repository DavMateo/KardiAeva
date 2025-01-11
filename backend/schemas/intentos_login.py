from typing import Optional
from pydantic import BaseModel, datetime_parse

class Intentos_login(BaseModel):
    id: Optional[int] = None
    fecha: datetime_parse
    direccion_ip: str
    exito: bool