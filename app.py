# Importando las librerías necesarias
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from backend.config.db import cargar_credenciales
from backend.routes.db_keys import config as configuracion_db
from backend.middleware.db_check import DBConnectionMiddleware


# Iniciando el servidor
app = FastAPI(
    title="KardiAeva",
    description="",
    version="0.0.1",
    openapi_tags=[{
        "name": "",
        "description": ""
    }]
)


# Cargar las credenciales al iniciar el servidor 
cargar_credenciales()


# Registrar el middleware
app.add_middleware(DBConnectionMiddleware)


# Montando los archivos estáticos del servidor (GUI)
app.mount("/static", StaticFiles(directory="frontend"), name="frontend")


# Ruta principal para la interfaz gráfica
@app.get("/")
async def server_index():
    return FileResponse("frontend/templates/configuracion.html")


# Incluyendo las respectivas rutas del servidor
app.include_router(configuracion_db, prefix="/api/config")