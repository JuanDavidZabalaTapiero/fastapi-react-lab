from app.db.models import User


def test_create_and_get_by_id(user_repository, db):
    user = User(name="Juan")

    created_user = user_repository.create(user)
    db.commit()

    found_user = user_repository.get_by_id(created_user.id)

    assert found_user is not None
    assert found_user.id == created_user.id
    assert found_user.name == "Juan"
