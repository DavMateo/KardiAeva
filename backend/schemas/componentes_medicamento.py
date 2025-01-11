from typing import Optional
from pydantic import BaseModel, json

class Componentes_medicamento(BaseModel):
    id: Optional[int] = None
    componentes: json