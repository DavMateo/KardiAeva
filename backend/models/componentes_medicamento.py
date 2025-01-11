from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, JSON
from config.db import meta, engine


# Creando la tabla "componentes_medicamento" en MySQL
componentes_medicamento = Table("componentes_medicamento", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("componentes", JSON, nullable=False)
)

meta.create_all(engine)