from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"])


@app.get("/")
def root():
    return {"message": "Hola desde FastAPI"}
