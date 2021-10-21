from app.models import db, Profile


# Adds a demo user, you can add other users here if you want
def seed_profiles():
    demo1 = Profile(
        name="demo1", user_id=1, avatar_id=1)
    demo2 = Profile(
        name="demo2", user_id=1, avatar_id=2)
    marnie1 = Profile(
        name="marnie1", user_id=2, avatar_id=3)

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(marnie1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_profiles():
    db.session.execute('TRUNCATE profiles RESTART IDENTITY CASCADE;')
    db.session.commit()
