from typing import Optional
from pydantic import BaseModel, datetime_parse
from schemas.tipo_enfermedad import Tipo_enfermedad

class Enfermedad(BaseModel):
    id: Optional[int] = None
    nombre: str
    descripcion: str
    fecha_diagnostico: datetime_parse
    es_enfermedad_principal: bool
    id_tipo_enfermedad: Tipo_enfermedad