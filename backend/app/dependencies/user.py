from app.db.database import get_db
from app.repositories.user_repository import UserRepository
from app.services.user_service import UserService
from fastapi import Depends


def create_user_service(db=Depends(get_db)):  # noqa
    repository = UserRepository(db)
    return UserService(repository, db)
