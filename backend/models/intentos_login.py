from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String, DateTime, Boolean
from config.db import meta, engine


# Creando la tabla "intentos_login" en MySQL
intenos_login = Table("intentos_login", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("fecha", DateTime, nullable=False),
    Column("direccion_ip", String(15), nullable=True),
    Column("exito", Boolean, nullable=False)
)

meta.create_all(engine)