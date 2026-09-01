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
