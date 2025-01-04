from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from sqlalchemy.exc import OperationalError
from backend.config.db import engine


# Definiendo el middleware
class DBConnectionMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        """
            Middleware que verifica si la base de datos está configurada antes de procesar
            la solicitud.
        """
        
        # Rutas que no necesitan de una base de datos para funcionar
        rutas_excluidas = ["/api/config/dbkey", "/", "/static"]
        
        # Permitir acceso a las rutas que no requieren de bases de datos
        if any(request.url.path.startswith(ruta) for ruta in rutas_excluidas):
            response = await call_next(request)
            return response
        
        
        # Verificando solicitudes a endpoints con dependencia a bases de datos
        try:
            # Intentar verificar la conexión a la base de datos
            if engine is None:
                raise HTTPException(
                    status_code = 503,
                    detail = "La base de datos no está configurada. Configure las credenciales primero."
                )
            
            # Ejecutar un ping para verificar su estado activo
            with engine.connect() as connection:
                connection.execute("SELECT 1")
        
        except OperationalError:
            # Error al conectar con la base de datos
            raise HTTPException(
                status_code = 503,
                detail = "No se pudo establecer conexión con la base de datos. Revise la configuración."
            )
        
        
        # Si todo va bien, pasa la solicitud al siguiente paso (Puede ser un middleware o un endpoint como en este caso)
        response = await call_next(request)
        return response