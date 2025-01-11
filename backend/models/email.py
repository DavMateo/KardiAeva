from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "email" en MySQL
email = Table("email", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre_usuario", String(45), nullable=False),
    Column("organizacion", String(45), nullable=False),
    Column("tipo", String(15), nullable=False)
)

meta.create_all(engine)