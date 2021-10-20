from .db import db





class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable = False)


    # create a many to many relationship with show_genre
    genre_shows = db.relationship("Show", secondary="show_genres", back_populates='genres')



# to dict function here
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name

            # can establish new keys for relationships above like below
            # 'user_name': self.runnings.to_dict(),
            # 'comments': [comment.to_dict() for comment in self.comments]

        }
