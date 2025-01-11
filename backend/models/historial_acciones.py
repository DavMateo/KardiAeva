from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, DateTime
from config.db import meta, engine


# Creando la tabla "historial_acciones" en MySQL
historial_acciones = Table("historial_acciones", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("accion", String(255), nullable=False),
    Column("fecha_registro", DateTime, nullable=False),
    Column("id_usuario", Integer, ForeignKey("usuario.id"), nullable=False, unique=True)
)

meta.create_all(engine)