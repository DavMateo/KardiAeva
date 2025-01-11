from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String, Text, DateTime
from config.db import meta, engine


# Creando la tabla "log_ia" en MySQL
log_ia = Table("log_ia", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("clasificacion_prevista", String(50), nullable=False),
    Column("prompt", Text, nullable=False),
    Column("fecha", DateTime, nullable=False),
    Column("modelo_ia", String(100), nullable=True),
    Column("version_ia", String(30), nullable=False)
)

meta.create_all(engine)