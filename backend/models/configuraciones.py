from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "configuraciones" en MySQL
configuraciones = Table("configuraciones", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("notificaciones", String(255), nullable=False, default="standar"),
    Column("tema", String(255), nullable=False, default="light"),
    Column("idioma", String(255), nullable=False, default="Español"),
    Column("id_usuario", Integer, ForeignKey("usuario.id"), nullable=False, unique=True)
)

meta.create_all(engine)