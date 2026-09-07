from app.dependencies.user import create_user_service
from app.schemas.user import UserCreate
from fastapi import APIRouter, Depends

router = APIRouter(prefix="/users")


@router.post("/", status_code=201)
def create(data: UserCreate, service=Depends(create_user_service)):  # noqa
    service.create(data.name)
    return {"message": "Usuario registrado correctamente."}
