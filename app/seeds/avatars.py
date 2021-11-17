from app.models import db, Avatar


# Adds a demo user, you can add other users here if you want
def seed_avatars():
    tanjiro = Avatar(
        image_url='https://i.ibb.co/7jNHhtY/img-chara-01.png')
    goku = Avatar(
        image_url='https://i.ibb.co/Z1d1JL5/goku-in-front-of-cooler-and-frieza-from-dragon-ball-z.png')
    naruto = Avatar(
        image_url='https://i.ibb.co/B60zb0g/Naruto-Shippuden-Uzumaki-Naruto-Jacket.png')

    db.session.add(tanjiro)
    db.session.add(goku)
    db.session.add(naruto)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_avatars():
    db.session.execute('TRUNCATE avatars RESTART IDENTITY CASCADE;')
    db.session.commit()
