from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "extension_documento" en MySQL
extension_documento = Table("extension_documento", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(14), nullable=False)
)

meta.create_all(engine)