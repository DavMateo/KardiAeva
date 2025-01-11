from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "categoria" en MySQL
categoria = Table("categoria", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("categoria", String(75), nullable=False),
    Column("descripcion", String(255), nullable=True)
)

meta.create_all(engine)