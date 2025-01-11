from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, Date, Text, Boolean
from config.db import meta, engine


# Creando la tabla "enfermedad" en MySQL
enfermedad = Table("enfermedad", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(255), nullable=False),
    Column("descripcion", Text(700), nullable=True),
    Column("fecha_diagnostico", Date, nullable=False),
    Column("es_enfermedad_principal", Boolean, nullable=False),
    Column("id_tipo_enfermedad", Integer, ForeignKey("tipo_enfermedad.id"), nullable=False, unique=True)
)

meta.create_all(engine)