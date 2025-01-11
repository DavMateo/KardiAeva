from typing import Optional
from pydantic import BaseModel, datetime_parse
from schemas.usuario import Usuario
from schemas.email import Email
from schemas.intentos_login import Intentos_login

class Credenciales(BaseModel):
    id: Optional[int] = None
    username: str
    contrasenya = str
    fecha_creacion = datetime_parse
    id_usuario = Usuario
    id_email = Email
    id_intento_login = Intentos_login