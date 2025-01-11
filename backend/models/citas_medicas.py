from enum import Enum
from sqlalchemy import Table, Column, Enum as SQLAlchemistEnum, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, DateTime
from config.db import meta, engine


# Creando el ENUM de la columna estado
class Estado(str, Enum):
    APLAZADA = "aplazada"
    CANCELADA = "cancelada"
    COMPLETADA = "completada"
    PENDIENTE = "pendiente"


# Creando la tabla "citas_medicas" en MySQL
citas_medicas = Table("citas_medicas", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("fecha", DateTime, nullable=False),
    Column("descripcion", String(255), nullable=True),
    Column("estado", SQLAlchemistEnum(Estado), nullable=False),
    Column("id_lugar_cita_medica", Integer, ForeignKey("lugar_cita_medica.id"), nullable=False),
    Column("id_especialidad_medica", Integer, ForeignKey("especialidad_medica.id"), nullable=False),
    Column("id_usuario", Integer, ForeignKey("usuario.id"), nullable=False)
)

meta.create_all(engine)