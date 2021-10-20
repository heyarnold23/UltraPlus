from .db import db

# create a helper table watchlist_shows
watchlist_shows = db.Table(
    "watchlist_shows",
    db.Column("watchlist_id", db.Integer, db.ForeignKey("watchlists.id"), primary_key=True),
    db.Column("show_id", db.Integer, db.ForeignKey("shows.id"), primary_key=True)
    )


class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable = False)
    profile_id = db.Column(db.Integer, db.ForeignKey("profiles.id"),  nullable = False)


    # create a many to one relationship with profiles (receiving end)
    profile = db.relationship("Profile", back_populates='profile_watchlists', cascade="all, delete")

    # create a many to many relationship with watchlist_shows
    shows = db.relationship("Show", secondary=watchlist_shows, back_populates='watchlists')



# to dict function here
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'profile_id': self.profile_id
            # can establish new keys for relationships above like below
            # 'user_name': self.runnings.to_dict(),
            # 'comments': [comment.to_dict() for comment in self.comments]

        }
