from app.db.models import User
from fastapi import HTTPException


class UserService:
    def __init__(self, repository, db):
        self.repository = repository
        self.db = db

    def create(self, name):
        new_user = User(name=name)
        user = self.repository.create(new_user)
        self.db.commit()
        return user

    def get_all(self):
        return self.repository.get_all()

    def get(self, user_id):
        user = self.repository.get_by_id(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado.")

        return user

    def update(self, user_id, name):
        user = self.repository.get_by_id(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado.")

        updated = self.repository.update(user, name)
        self.db.commit()
        return updated

    def delete(self, user_id):
        user = self.repository.get_by_id(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado.")

        self.repository.delete(user)
        self.db.commit()
