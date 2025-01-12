from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, DateTime
from backend.config.db import meta, engine


# Creando la tabla "credenciales" en MySQL
credenciales = Table("credenciales", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("username", String(30), nullable=False),
    Column("contrasenya", String(255), nullable=False),
    Column("fecha_creacion", DateTime, nullable=False),
    Column("id_usuario", Integer, ForeignKey("usuario.id"), nullable=False, unique=True),
    Column("id_email", Integer, ForeignKey("email.id"), nullable=False, unique=True),
    Column("id_intento_login", Integer, ForeignKey("intento_login"), nullable=False, unique=True)
)

meta.create_all(engine)