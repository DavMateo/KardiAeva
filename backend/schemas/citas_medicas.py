from typing import Optional
from pydantic import BaseModel, datetime_parse
from models.citas_medicas import Estado
from schemas.lugar_cita_medica import Lugar_cita_medica
from schemas.especialidad_medica import Especialidad_medica
from schemas.usuario import Usuario

class Citas_medicas(BaseModel):
    id: Optional[int] = None
    fecha: datetime_parse
    descripcion: Optional[str] = None
    estado: Estado
    id_lugar_cita_medica: Lugar_cita_medica
    id_especialidad_medica = Especialidad_medica
    id_usuario = Usuario