from typing import Optional
from pydantic import BaseModel
from schemas.enfermedad import Enfermedad
from schemas.sintomas import Sintomas
from models.sintomas_enfermedad import Relevancia, Etapa

class Sintomas_enfermedad(BaseModel):
    id_enfermedad: Enfermedad
    id_sintomas: Sintomas
    relevancia: Relevancia
    etapa: Etapa
    descripcion: Optional[str] = None