from app.api.users import router as user_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy.exc import SQLAlchemyError

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Error handlers


@app.exception_handler(SQLAlchemyError)
async def sqlalchemy_exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"detail": "Error de conexión con la base de datos."},
    )


@app.exception_handler(Exception)
async def global_exception(request, exc):
    return JSONResponse(
        status_code=500,
        content={"detail": "Ocurrió un error inesperado en el servidor."},
    )


# Endpoints
app.include_router(user_router)


@app.get("/")
def root():
    return {"message": "Hola desde FastAPI"}
