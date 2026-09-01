def test_create_user(user_service):
    created_user = user_service.create("Juan")

    assert created_user.id is not None
    assert created_user.name == "Juan"
