from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "nombre_completo" en MySQL
nombre_completo = Table("nombre_completo", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("primer_nombre", String(30), nullable=False),
    Column("segundo_nombre", String(30), nullable=True),
    Column("primer_apellido", String(30), nullable=False),
    Column("segundo_apellido", String(30), nullable=True)
)

meta.create_all(engine)