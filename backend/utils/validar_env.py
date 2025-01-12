from pathlib import Path


def verificar_env(variables_requeridas: list, nombre_archivo=".env") -> bool:
    ruta_env = Path(nombre_archivo)
    num = 0
    
    if not ruta_env.is_file():
        print(f"Archivo '{nombre_archivo}' no encontrado.")
        return False
    
    elif ruta_env.stat().st_size == 0:
        print(f"El archivo '{nombre_archivo}' está vacío.")
        return False
    
    else: 
        with open(ruta_env, "r") as archivo:
            for linea in archivo:
                str_linea = linea[0:linea.find("=")].strip()
                
                if not str_linea.lower() == variables_requeridas[num]:
                    print(f"La variable '{str_linea}' no coincide con las llaves solicitadas por la base de datos.")
                    return False            
                num += 1
        
    return True