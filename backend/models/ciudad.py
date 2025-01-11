from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "ciudad" en MySQL
ciudad = Table("ciudad", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(100), nullable=False),
    Column("id_region", Integer, ForeignKey("region.id"), nullable=False)
)

meta.create_all(engine)