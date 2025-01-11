from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String, CHAR
from config.db import meta, engine


# Creando la tabla "pais" en MySQL
pais = Table("pais", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(150), nullable=False),
    Column("prefijo", CHAR(2), nullable=True),
    Column("Sufijo", CHAR(4), nullable=False),
    Column("moneda", CHAR(3), nullable=True)
)

meta.create_all(engine)