from fastapi import APIRouter, HTTPException
from backend.config.db import configurar_motor_db
from backend.schemas.db_credenciales import DBCredenciales
from pathlib import Path
from backend.utils.validar_env import verificar_env


# Crear el router
config = APIRouter()


# Configurando el endpoint
@config.post("/dbkey")
def configurar_db(credenciales: DBCredenciales):
    try:
        dict_credenciales = {}
        response = configurar_motor_db(credenciales)
        ruta_env = Path(".env")
        
        if response:
            dict_credenciales = dict(credenciales)
            
            with ruta_env.open("w") as archivo_env:
                for clave, valor in dict_credenciales.items():
                    archivo_env.write(f"{clave.upper()}={valor}\n")
        
        result = verificar_env(list(dict_credenciales.keys()))
        
        if result:
            return f"Archivo {ruta_env} creado exitosamente."
        else:
            raise Exception("Algo ha ido mal")
    
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    except Exception as ex:
        print(ex)