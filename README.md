# FastAPI + React Lab

Proyecto de prueba para aprender y experimentar con **FastAPI**, **React** y **PostgreSQL**.

---

# Docker

El archivo `compose.yml` configura los siguientes servicios:

- **PostgreSQL**: motor de base de datos.
- **pgAdmin**: gestor visual para administrar PostgreSQL.

> Si no necesitas pgAdmin, puedes eliminar su servicio de `compose.yml`.

## Iniciar los servicios

Desde la carpeta donde se encuentra `compose.yml`:

```
docker compose up -d
```

### PostgreSQL

- Host: `localhost`
- Port: `5432`
- User: `postgres`
- Password: `postgres`
- Database: `fastapi_react_lab`

### pgAdmin

Accede desde el navegador:

```
http://localhost:5050
```

Credenciales:

- Email: `admin@example.com`
- Password: `admin`

---

# Migraciones

Las migraciones se gestionan utilizando **Alembic** y **SQLAlchemy**.

## Requisitos

Antes de aplicar las migraciones debes:

1. Tener Python instalado.
2. Tener un entorno virtual creado y activado.
3. Tener instaladas las dependencias del proyecto.
4. Tener PostgreSQL ejecutándose mediante Docker.

Las dependencias se pueden instalar con:

```
pip install -r requirements.txt
```

> La base de datos `fastapi_react_lab` se crea automáticamente por PostgreSQL al inicializar el contenedor por primera vez.

## Aplicar migraciones

Desde la carpeta `backend`:

```
cd backend
```

Ejecuta:

```
alembic upgrade head
```

Esto aplicará todas las migraciones pendientes a la base de datos.
