from app.models import db, Genre



def seed_genres():
    action = Genre(
        name='Action')
    adventure = Genre(
        name='Adventure')
    comedy = Genre(
        name='Comedy')
    drama = Genre(
        name='Drama')
    fantasy = Genre(
        name='Fantasy')
    horror = Genre(
        name='Horror')
    psychological = Genre(
        name='Psychological')
    romance = Genre(
        name='Romance')
    scifi = Genre(
        name='Sci Fi')
    shounen = Genre(
        name='Shounen')
    slice_of_life = Genre(
        name='Slice of Life')
    sports = Genre(
        name='Sports')

    db.session.add(action)
    db.session.add(adventure)
    db.session.add(comedy)
    db.session.add(drama)
    db.session.add(fantasy)
    db.session.add(horror)
    db.session.add(psychological)
    db.session.add(romance)
    db.session.add(scifi)
    db.session.add(shounen)
    db.session.add(slice_of_life)
    db.session.add(sports)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_genres():
    db.session.execute('TRUNCATE genres RESTART IDENTITY CASCADE;')
    db.session.commit()
