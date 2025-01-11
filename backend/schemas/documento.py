from typing import Optional
from pydantic import BaseModel, datetime_parse
from schemas.especialidad_medica import Especialidad_medica
from schemas.usuario import Usuario
from schemas.log_ia import Log_ia
from schemas.extension_documento import Extension_documento
from schemas.estado import Estado
from schemas.categoria import Categoria

class Documento(BaseModel):
    id: Optional[int] = None
    titulo: str
    descripcion: Optional[str] = None
    contenido_texto: str
    ruta_guardado: str
    tamanyo_guardado: int
    fecha_guardado: datetime_parse
    id_especialidad_medica: Especialidad_medica
    id_usuario: Usuario
    id_log_ia: Log_ia
    id_extension_documento: Extension_documento
    id_estado: Estado
    id_categoria: Categoria