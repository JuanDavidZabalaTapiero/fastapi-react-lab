from app.dependencies.user import create_user_service
from app.schemas.user import UserCreate, UserUpdate
from fastapi import APIRouter, Depends

router = APIRouter(prefix="/users")


@router.post("/", status_code=201)
def create(data: UserCreate, service=Depends(create_user_service)):  # noqa
    service.create(data.name)
    return {"message": "Usuario registrado correctamente."}


@router.get("/", status_code=200)
def get_all(service=Depends(create_user_service)):  # noqa
    users = service.get_all()
    return {"users": users}


@router.put("/{user_id}", status_code=200)
def update(user_id: int, data: UserUpdate, service=Depends(create_user_service)):  # noqa
    service.update(user_id, name=data.name)
    return {"message": "Usuario actualizado correctamente."}


@router.delete("/{user_id}", status_code=204)
def delete(user_id: int, service=Depends(create_user_service)):  # noqa
    service.delete(user_id)
    return {"message": "Usuario eliminado correctamente."}
