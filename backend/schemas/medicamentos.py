from typing import Optional
from pydantic import BaseModel
from schemas.tipo_dosis import Tipo_dosis
from schemas.componentes_medicamento import Componentes_medicamento
from schemas.tipo_medicamento import Tipo_medicamento

class Medicamento(BaseModel):
    id: Optional[int] = None
    nombre: str
    dosis_recetadas: int
    dosis_totales: Optional[int] = None
    imagen: Optional[str] = None
    id_tipo_dosis: Tipo_dosis
    id_componentes_medicamento: Componentes_medicamento
    id_tipo_medicamento: Tipo_medicamento