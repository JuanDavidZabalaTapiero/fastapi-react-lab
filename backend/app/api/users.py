from app.dependencies.user import create_user_service
from fastapi import APIRouter, Depends

router = APIRouter(prefix="/users")


@router.post("/", status_code=201)
def create(service=Depends(create_user_service)):  # noqa
    service.create("Juan")
    return {"message": "Usuario registrado correctamente."}
