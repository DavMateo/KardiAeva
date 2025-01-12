from enum import Enum
from sqlalchemy import Table, Column, Enum as SQLAlchemyEnum, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, SmallInteger, Float, Date
from backend.config.db import meta, engine


# Creando el ENUM de la columna genero
class GeneroUser(str, Enum):
    MASCULINO = "m"
    FEMENINO = "f"


# Creando la tabla "usuario" en MySQL
usuario = Table("usuario", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("edad", SmallInteger, nullable=False),
    Column("genero", SQLAlchemyEnum(GeneroUser), nullable=False),
    Column("peso", Float, nullable=False),
    Column("estatura", Float, nullable=False),
    Column("fecha_nacimiento", Date, nullable=False),
    Column("id_log_ia", Integer, ForeignKey("log_ia.id"), nullable=False, unique=True),
    Column("id_nombre_completo", Integer, ForeignKey("nombre_completo.id"), nullable=False, unique=True),
    Column("id_enfermedad", Integer, ForeignKey("enfermedad.id"), nullable=False, unique=True),
    Column("id_medicamento", Integer, ForeignKey("medicamento.id"), nullable=False, unique=True),
    Column("id_lugar_residencia", Integer, ForeignKey("luga_residencia.id"), nullable=False, unique=True)
)

meta.create_all(engine)