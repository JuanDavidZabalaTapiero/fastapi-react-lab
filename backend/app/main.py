from app.api.users import router as user_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"])

# Endpoints
app.include_router(user_router)


@app.get("/")
def root():
    return {"message": "Hola desde FastAPI"}
