# Importando las librerías necesarias
from sqlalchemy import create_engine, MetaData
from sqlalchemy_utils import database_exists, create_database
from sqlalchemy.exc import OperationalError
from urllib.parse import quote
import json
#from utils.envKeys import obtener_credenciales


# Motor de la base de datos
engine = None


# Levantar la conexión con la base de datos usando las credenciales suministradas
def cargar_credenciales():
    """
        Cargar credenciales desde un archivo y arrancar el motor de DB
    """
    global engine
    global meta
    global str_connection_url
    
    try:
        with open("db_config.json", "r") as file:
            credenciales = json.load(file)
        
        str_connection_url = f"mysql+pymysql://{credenciales['user']}:{quote(credenciales['password'])}@{credenciales['host']}:{credenciales['port']}/{credenciales['database']}"
        engine = create_engine(str_connection_url)
        
        if not database_exists(engine.url):
            create_database(engine.url)
        
        # Obteniendo el objeto de conexión
        conn = engine.connect()
        meta = MetaData()
    
    except KeyError as e:
        print(f"Error: Falta una clave en las credenciales: {e}")
        engine = None
        meta = None
    
    except FileNotFoundError:
        print("Archivo de configuración no encontrado. Configure la base de datos primero desde la interfaz web.")
    
    except Exception as e:
        print(f"Error al cargar las credenciales: {e}")



# Configuración de credenciales de la base de datos
def configurar_motor_db(credenciales):
    """
        Recibe las credenciales ingresada por el usuario desde un formulario, prueba
        la conexión y configura el motor global.
    """
    global str_connection_url
    credenciales = dict(credenciales)
    
    
    # Intentar conectar a la base de datos
    try:
        str_connection_url = f"mysql+pymysql://{credenciales['user']}:{quote(credenciales['password'])}@{credenciales['host']}:{credenciales['port']}/{credenciales['database']}"
        engine = create_engine(str_connection_url)
        
        if not database_exists(engine.url):
            create_database(engine.url)
        
        
        # Guardar las credenciales
        with open("db_config.json", "w") as file:
            json.dump(dict(credenciales), file)
        
        return {
            "message": "Base de datos configurada exitosamente."
        }
    
    except OperationalError:
        raise ValueError("No se pudo conectar a la base de datos. Verifique las credenciales.")