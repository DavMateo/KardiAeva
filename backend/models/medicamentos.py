from sqlalchemy import Table, Column, ForeignKey
from sqlalchemy.sql.sqltypes import Integer, String, SmallInteger
from config.db import meta, engine


# Creando la tabla "medicamentos" en MySQL
medicamentos = Table("medicamento", meta,
    Column("id", Integer, primary_key=True, autoincrement=True, unique=True),
    Column("nombre", String(255), nullable=False),
    Column("dosis_recetadas", SmallInteger(5), nullable=False),
    Column("dosis_totales", SmallInteger(5), nullable=True),
    Column("imagen", String(100), nullable=True),
    Column("id_tipo_dosis", Integer, ForeignKey("tipo_dosis.id"), nullable=False, unique=True),
    Column("id_componentes_medicamento", Integer, ForeignKey("componentes_medicamento.id"), nullable=False, unique=True),
    Column("id_tipo_medicamento", Integer, ForeignKey("tipo_medicamento.id"), nullable=False, unique=True)
)