# 🚀 FastAPI + React Lab

Proyecto de prueba para aprender y experimentar con **FastAPI**, **React** y **PostgreSQL**.

---

# 📸 Capturas de Pantalla

## 🏠 Inicio (`/`)

![Inicio](docs/images/home.png)

## 👥 Lista de Usuarios (`/users`)

![Lista de Usuarios](docs/images/users.png)

## ➕ Registro de Usuario (`/users/register`)

![Registro de Usuario](docs/images/register.png)

---

# 🐋 Docker

`compose.yml`:

- PostgreSQL
- pgAdmin: gestor visual de PostgreSQL

> Puedes modificar las credenciales si quieres.

---

# ⚙️ Backend

Importante ingresar al directorio `backend` para cualquier operación:

```cmd
cd backend
```

## Entorno virtual

Crear:

```cmd
python -m venv .venv
```

Activar:

```cmd
.venv\Scripts\activate
```

## Dependencias

```cmd
pip install -r requirements.txt
```

## Variables de entorno

Crear un archivo `.env`:

```.env
DATABASE_URL=postgresql+psycopg://user:password@host:port/db_name
TEST_DATABASE_URL=postgresql+psycopg://user:password@host:port/db_name_test
```

## 💚 FastAPI

Levantar el servicio:

```cmd
uvicorn app.main:app --reload
```

## 🗄️ Base de datos

Aplicar migraciones:

```cmd
alembic upgrade head
```

> Puedes modificar `backend/migrations/env.py` para que aplique las migraciones a tu base de datos de pruebas

---

# 💻 Frontend

Importante ingresar al directorio `frontend` para cualquier operación:

```cmd
cd frontend
```

## Dependencias

```cmd
npm install
```

## ⚛️ React

Levantar el servicio:

```cmd
npm run dev
```
