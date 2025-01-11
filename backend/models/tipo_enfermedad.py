from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "tipo_enfermedad" en MySQL
tipo_enfermedad = Table("tipo_enfermedad", meta, 
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(40), nullable=False),
    Column("descripcion", String(255), nullable=True)
)

meta.create_all(engine)