from app.db.models import User


class UserService:
    def __init__(self, repository, db):
        self.repository = repository
        self.db = db

    def create(self, name):
        new_user = User(name=name)
        user = self.repository.create(new_user)
        self.db.commit()
        return user
