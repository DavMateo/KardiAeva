from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "region" en MySQL
nombre = Table("region", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(100), nullable=False),
    Column("id_pais", Integer, ForeignKey("pais.id"), nullable=False)
)

meta.create_all(engine)