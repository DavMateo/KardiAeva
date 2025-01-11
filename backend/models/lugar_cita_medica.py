from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import Integer, String
from config.db import meta, engine


# Creando la tabla "lugar_cita_medica" en MySQL
lugar_cita_medica = Table("lugar_cita_medica", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre_centro_medico", String(255), nullable=False),
    Column("direccion", String(255), nullable=False)
)

meta.create_all(engine)