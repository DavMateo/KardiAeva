from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "especialidad_medica" en MySQL
especialidad_medica = Table("especialidad_medica", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(75), nullable=False),
    Column("descripcion", String(255), nullable=False)
)

meta.create_all(engine)