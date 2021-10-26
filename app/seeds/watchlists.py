from app.models import db, Watchlist


# Adds a demo user, you can add other users here if you want
def seed_watchlists():
    demo = Watchlist(
        name="ThisisDemo1's", profile_id=1)
    demo2 = Watchlist(
        name="ThisisDemo2's", profile_id=2)
    marnie = Watchlist(
        name="ThisisMarnie's", profile_id=3)


    db.session.add(demo)
    db.session.add(demo2)
    db.session.add(marnie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_watchlists():
    db.session.execute('TRUNCATE watchlists RESTART IDENTITY CASCADE;')
    db.session.commit()
