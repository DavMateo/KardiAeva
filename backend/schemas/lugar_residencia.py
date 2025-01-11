from typing import Optional
from pydantic import BaseModel
from models.lugar_residencia import Tipo_residencia
from schemas.codigo_postal import Codigo_postal

class Lugar_residencia(BaseModel):
    id: Optional[int] = None
    tipo_via: str
    nombre_via: str
    numero_residencia: str
    piso_o_apartamento: str
    indicaciones_adicionales: Optional[str] = None
    tipo_residencia: Tipo_residencia
    id_codigo_postal: Codigo_postal