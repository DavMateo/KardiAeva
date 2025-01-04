# Importando las librerías necesarias
from pydantic import BaseModel

class DBCredenciales(BaseModel):
    user: str
    password: str
    host: str
    port: int
    database: str