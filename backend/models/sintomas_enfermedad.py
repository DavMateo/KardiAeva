from enum import Enum
from sqlalchemy import Table, Column, ForeignKey, Enum as SQLAlchemyEnum
from sqlalchemy.sql.sqltypes import Integer, Text
from config.db import meta, engine


# Creando el ENUM de la columna "relevancia"
class Relevancia(str, Enum):
    ALTA = "alta",
    MEDIA = "media",
    BAJA = "baja"

# Creando el ENUM de la columna "etapa"
class Etapa(str, Enum):
    ASINTOMATICO = "asintomático",
    INICIAL = "inicial",
    DESARROLLO = "en desarrollo",
    AVANZADA = "avanzada",
    TERMINAL = "terminal"


# Creando la tabla "sintomas_enfermedad" en MySQL
sintomas_enfermedad = Table("sintomas_enfermedad", meta,
    Column("id_enfermedad", Integer, ForeignKey("enfermedad.id"), nullable=False, unique=True),
    Column("id_sintomas", Integer, ForeignKey("sintomas.id"), nullable=False, unique=True),
    Column("relevancia", SQLAlchemyEnum(Relevancia), nullable=False),
    Column("etapa", SQLAlchemyEnum(Etapa), nullable=False),
    Column("descripcion", Text, nullable=True)
)

meta.create_all(engine)