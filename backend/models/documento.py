from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, Text, DateTime
from config.db import meta, engine


# Creando la tabla "documento" en MySQL
documento = Table("documento", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("titulo", String(100), nullable=False),
    Column("descripcion", Text(350), nullable=True),
    Column("contenido_texto", Text, nullable=False),
    Column("ruta_guardado", String(255), nullable=False),
    Column("tamanyo_guardado", Integer, nullable=False),
    Column("fecha_guardado", DateTime, nullable=False),
    Column("id_especialidad_medica", Integer, ForeignKey("especialidad_medica.id"), nullable=False),
    Column("id_usuario", Integer, ForeignKey("usuario.id"), nullable=False),
    Column("id_log_ia", Integer, ForeignKey("log_ia.id"), nullable=False),
    Column("id_extension_documento", Integer, ForeignKey("extension_documento.id"), nullable=False),
    Column("id_estado", Integer, ForeignKey("estado.id"), nullable=False),
    Column("id_categoria", Integer, ForeignKey("categoria.id"), nullable=False)
)

meta.create_all(engine)