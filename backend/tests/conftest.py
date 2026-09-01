import pytest
from app.repositories.user_repository import UserRepository
from app.services.user_service import UserService
from config import TEST_DATABASE_URL
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine(TEST_DATABASE_URL)
TestingSessionLocal = sessionmaker(bind=engine, autoflush=False)


@pytest.fixture
def db():
    connection = engine.connect()
    transaction = connection.begin()
    db = TestingSessionLocal(bind=connection)

    try:
        db.begin_nested()
        yield db

    finally:
        db.close()
        transaction.rollback()
        connection.close()


@pytest.fixture
def user_repository(db):
    return UserRepository(db)


@pytest.fixture
def user_service(user_repository, db):
    return UserService(user_repository, db)
