from typing import Optional
from pydantic import BaseModel, datetime_parse

class Log_ia(BaseModel):
    id: Optional[int] = None
    clasificacion_prevista: str
    prompt: str
    fecha: datetime_parse
    modelo_ia: Optional[str] = None
    version_ia: Optional[str] = None