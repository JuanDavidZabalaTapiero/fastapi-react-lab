# 🚀 FastAPI + React Lab

Proyecto de prueba para aprender y experimentar con **FastAPI**, **React** y **PostgreSQL**.

---

# 🐋 Docker

`compose.yml`:

- PostgreSQL
- pgAdmin: gestor visual de PostgreSQL

> Puedes modificar las credenciales si quieres.

---

# ⚙️ Backend

Importante ingresar al directorio `backend` para cualquier operación:

`cd backend`

## Entorno virtual

Crear:

`python -m venv .venv`

Activar:

`.\.venv\Scripts\activate`

## Dependencias

`pip install -r requirements.txt`

## Variables de entorno

Crear un archivo `.env`:

`DATABASE_URL=postgresql+psycopg://user:password@host:port/db_name`

`TEST_DATABASE_URL=postgresql+psycopg://user:password@host:port/db_name_test`

## FastAPI

Levantar el servicio:

`uvicorn app.main:app --reload`

## Base de datos

Aplicar migraciones:

`alembic upgrade head`

---

# 💻 Frontend

Importante ingresar al directorio `frontend` para cualquier operación:

`cd frontend`

## Dependencias

`npm install`

## React

Levantar el servicio:

`npm run dev`
