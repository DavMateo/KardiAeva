# Importando las librerías necesarias
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse


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


# Montando los archivos estáticos del servidor (GUI)
app.mount("/static", StaticFiles(directory="frontend"), name="frontend")


# Ruta principal para la interfaz gráfica
@app.get("/")
async def server_index():
    return FileResponse("frontend/index.html")


# Incluyendo las respectivas rutas del servidor