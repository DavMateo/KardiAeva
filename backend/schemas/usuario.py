from typing import Optional
from pydantic import BaseModel, datetime_parse
from backend.models.usuario import GeneroUser
from backend.schemas.log_ia import Log_ia
from backend.schemas.nombre_completo import Nombre_completo
from backend.schemas.enfermedad import Enfermedad
from backend.schemas.medicamentos import Medicamento
from backend.schemas.lugar_residencia import Lugar_residencia

class Usuario(BaseModel):
    id: Optional[int] = None
    edad: int
    genero: GeneroUser
    peso: float
    estatura: float
    fecha_nacimiento: datetime_parse
    id_log_ia: Log_ia
    id_nombre_completo: Nombre_completo
    id_enfermedad: Enfermedad
    id_medicamento: Medicamento
    id_lugar_residencia: Lugar_residencia