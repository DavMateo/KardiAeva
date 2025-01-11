from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "codigo_postal" en MySQL
codigo_postal = Table("codigo_postal", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("codigo", String(20), nullable=False),
    Column("id_ciudad", Integer, ForeignKey("ciudad.id"), nullable=False)
)

meta.create_all(engine)