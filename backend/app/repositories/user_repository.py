from app.db.models import User
from sqlalchemy import select


class UserRepository:
    def __init__(self, db):
        self.db = db

    def create(self, user):
        self.db.add(user)
        return user

    def get_by_id(self, user_id):
        stmt = select(User).where(User.id == user_id)
        return self.db.scalar(stmt)

    def get_all(self):
        return self.db.scalars(select(User).order_by(User.name)).all()

    def update(self, user, name):
        user.name = name
        return user

    def delete(self, user):
        self.db.delete(user)
