u
![KardiAeva Screenshot](/assets_readme/demo.png)


# Proyecto KardiAeva

KardiAeva es un sistema de gestión médica en la cuál, los usuarios podrás administrar sus historias clínicas y documentos afines, todo el un mismo lugar, sin preocuparse de olvidar papeles a la hora de tu consulta. Además, la IA integrada aprende de ti, permitiéndole conocer a detalle tu estado de salud y así recibir una respuesta más personalizada al usuario.  
## Tecnologías usadas

**Cliente:** HTML5, CSS3 y JS Vanilla

**Servidor:** Python3.13, FastAPI, MySQL


## Diseño

### Interfaz Web
El diseño web se creó a partir de un maquetado hecho en Figma que puedes ver a continuación: https://www.figma.com/design/RvguQ9RvCQZKUOlBl75dP2/Untitled?node-id=0-1&t=bTUQL3tS6VZx3dKj-1


### Diseño Base de Datos
![KardiAevaDB Screenshot](/assets_readme/KardiAeva-modelo_conceptual.png)
Modelo conceptual.

![KardiAevaDB Screenshot](/assets_readme/KardiAeva_modelo_logico.png)
Modelo logico.

![KardiAevaDB Screenshot](/assets_readme/KardiAeva_modelo_EntidadRelacion.png)
Modelo Entidad-Relacion ER
## Hardware

La aplicación está diseñada para ser ejecutada de manera local con el fin de mantener sus datos alejados de posibles ataques en Internet. Así mismo, requerirá del poder de cómputo necesario para poder ejecutarlo.

### Ejecución en CPU
| Componente | Requitos Mínimos                         | Requisitos Recomendados                  |
|------------|------------------------------------------|------------------------------------------|
| CPU        | Intel Core i5 8th Gen -- AMD Ryzen 5 2500 U | Intel Core i9 14th -- Gen AMD Ryzen 9 7950X |
| RAM        | 16GB DDR5 4800MHZ -- 16GB DDR4 2400MHz      | 64GB DDR5 6400MHz -- 64GB DDR4 3200MHz    |
| SSD        | 1000MBPS Lectura / 500MBPS Escritura  --  30GB libres    | 3500MBPS Lectura / 3300MBPS Escritura  --  64/128GB libres    |

El uso de una buena CPU y RAM es primordial en el rendimiento del modelo de IA. Este se cargará completamente en RAM y se procesará en CPU si la disponibilidad de gráfica es limitada. Evitar a toda costa el uso de HDD por su baja velocidad de escritura / lectura.


### Ejecución en GPU
| Componente | Requitos Mínimos                                                           | Requisitos Recomendados                                            |
|------------|----------------------------------------------------------------------------|--------------------------------------------------------------------|
| CPU        | Intel Core i5 8th Gen -- AMD Ryzen 5 2500 U                                 | Intel Core i7/i9 8th Gen -- AMD Ryzen 7 5800X/9 7950X               |
| RAM        | 24/32GB DDR5 4800MHZ -- 24/32GB DDR4 2400MHz                                | 48/64GB DDR5 6400MHz -- 48/64GB DDR4 3200MHz                        |
| GPU        | Nvidia GeForce 3080 TI 12GB GDDR6X -- Radeon RX 6900 XT Graphics  --  16GB GDDR6 | Nvidia GeForce 4090 TI 24GB GDDR6X -- Radeon RX 7900 XTX  --  24GB GDDR6 |
| SSD        | 1000MBPS Lectura -- 500MBPS Escritura 30GB libres                           | 3500MBPS Lectura -- 3300MBPS Escritura 64/128GB libres                  |

Se debe priorizar la calidad de la GPU y sus núcleos CUDA. El mínimo de VRAM es de 12GB, aunque puede ser inestable y ser lento.

Los modelos usados se deben descargar en el equipo donde se ejecute, estos tienen un peso total de 26GB aproximadamente, por lo que dependerá de su velocidad de internet. Recomiendo un mínimo de 30Mbps de ancho de banda, aunque lo ideal sería de +60Mbps.

Si entrena los modelos de IA por su cuenta usando los recursos presentes dentro de este repositorio, ten en cuenta que el espacio en disco requerido puede aumentar más hallá de los requerimientos especificados.

**NOTA**: Se recomienda el uso del Sistema Operativo Linux con Python 3.13 para la ejecución del software.
## Inteligencia Artificial

Se han usado un total de 5 modelos de Inteligencia Artificial, cada uno con una función en específico. Estos modelos son:


| **Modelo**                  | **Propósito**                            | **Tamaño Aproximado** |
|-----------------------------|------------------------------------------|-----------------------|
| `microsoft/Phi-3.5-mini-instruct` | Modelo de generación conversacional especializado en el área médica. |3.82B parámetros (~7.64GB)  |
| `facebook/bart-large-cnn`   | Resumen de textos médicos complejos.     | 406M parámetros (~8.56GB) |
| `google/pegasus-large`      | Resumen avanzado de textos médicos.      | 568M parámetros (~9.11GB) |
| `distilbert-base-uncased`   | Clasificación de documentos médicos.     | 67M parámetros (~1.53GB) |
| `sentence-transformers/paraphrase-mpnet-base-v2` | Similaridad semántica entre textos médicos. | 109M parámetros (~1.31GB) |


Todos estos modelos se ejecutan según la petición del usuario, esto con el fin de ahorrar VRAM y no saturar la GPU o CPU. El soporte de fine-tuning está destinado a: Phi-3.5-mini-instruct, bart-large-cnn y pegasus-large. Los datasets usados para entrenar los últimos dos modelos fueron hechos teniendo en base la información médica de **MayoClinic**.
## Funcionamiento

Todo inicia en el momento en que el usuario se registra en la plataforma. Se valida si tiene una base de datos configurada, en caso negativo, se dirigirá al usuario a terminar de completar su información de usuario. Luego se le dará la bienvenida, en ese momento el sistema estará listo para recibir sus archivos en formato **.pdf**.

Al ingresar el PDF en el sistema, se extraerá todo su contenido a texto plano mediante IA similar a un OCR. Una vez terminado, se guardará en la base de datos como una copia en texto plano del archivo original, y será procesado por dos IA con el objetivo de generar resúmenes detallados para guardarse en la base de datos y resúmenes extremadamente cortos pero concisos para ser pasado al prompt de Phi-3.5 cuando el usuario desee realizar alguna pregunta al modelo. Esto permitirá obtener todo el contexto del usuario y así poder ofrecerle una conversación más personalizada siguiendo su historial médico.

Mientras eso ocurre, otro modelo de IA se encargará de analizar el contenido del texto extraído y clasificarlo por tipo de documento según corresponda.
## Installation

Para instalar y ejecutar el sistema de forma local en tu computadora, sigue los siguientes pasos según el sistema operativo que estés usando:

### Linux / MacOS

1. Clona el repositorio. Asegúrate de tener git instalado
```bash
  git clone https://github.com/DavMateo/KardiAeva.git
  cd KardiAeva
```

2. Verifica tu versión de Python:
```bash
  python --version
```
Debe dar como resultado la versión instalada en su equipo. Si esta es menor a la 3.10, por favor actualice con:
```bash
  sudo apt-get update && sudo apt-get upgrade
  sudo apt-get install python3.13
```
Basado en distribuciones **Ubuntu**, ajústelo según la distribución Linux o sistema MacOS que esté usando.  


3. Crea un entorno virtual:
```bash
  python3 -m venv .venv
  source .venv/bin/activate
```

4. Instala las dependencias necesarias:
```bash
  pip install --upgrade pip
  pip install -r requirements.txt
```

5. Ejecuta el servidor:
```bash
  uvicorn app:app --port 8000 --reload --log-level debug
```

6. Accede a la interfaz web:
Ingresa a tu navegador de preferencia y pon ```http://127.0.0.1:8000```. Puedes modificar la dirección URL y el puerto del servidor mediante banderas al momento de ejecutar el servidor.


### Windows
1. Clona el repositorio:
Descarga e instala Git para Windows desde git-scm.com, si aún no lo tienes instalado. Luego, abre Git Bash o la terminal de tu preferencia y ejecuta:
```bash
  git clone https://github.com/DavMateo/KardiAeva.git
  cd KardiAeva
```

2. Verifica tu versión de Python:
```bash
  python --version
```
Esto mostrará la versión instalada en tu equipo. Si es menor a la 3.10, descarga e instala la última versión de Python desde python.org. Durante la instalación, asegúrate de marcar la casilla "Add Python to PATH".

3. Crea un entorno virtual:
```bash
  python -m venv .venv
```
Activa el entorno virtual según la terminal que estés usando:

* **PowerShell**: ```.venv\Scripts\Activate```
* **Símbolo del Sistema**: ```.venv\Scripts\activate.bat```

4. Instala las dependencias necesarias:
```bash
  pip install --upgrade pip
  pip install -r requirements.txt
```

5. Ejecuta el servidor:
```bash
  uvicorn app:app --port 8000 --reload --log-level debug
```

6. Accede a la interfaz web:
Ingresa a tu navegador de preferencia y pon ```http://127.0.0.1:8000```. Puedes modificar la dirección URL y el puerto del servidor mediante banderas al momento de ejecutar el servidor.
