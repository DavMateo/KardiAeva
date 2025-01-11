from enum import Enum
from sqlalchemy import Table, Column, Enum as SQLALchemyEnum, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando el ENUM de la columna tipo_residencia
class Tipo_residencia(str, Enum):
    LABORAL = "laboral"
    RESIDENCIAL = "residencial"
    RURAL = "rural"

# Creando la tabla "lugar_residencia" en MySQL
lugar_residencia = Table("lugar_residencia", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("tipo_via", String(50), nullable=False),
    Column("nombre_via", String(50), nullable=False),
    Column("numero_residencia", String(50), nullable=False),
    Column("piso_o_apartamento", String(20), nullable=False),
    Column("indicaciones_adicionales", String(255), nullable=True),
    Column("tipo_residencia", SQLALchemyEnum(Tipo_residencia), nullable=False),
    Column("id_codigo_postal", Integer, ForeignKey("codigo_postal.id"), nullable=False)
)

meta.create_all(engine)