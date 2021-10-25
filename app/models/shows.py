from .db import db

# create a helper table show_genres
show_genres = db.Table(
    "show_genres",
    db.Column("show_id", db.Integer, db.ForeignKey("shows.id"), primary_key=True),
    db.Column("genre_id", db.Integer, db.ForeignKey("genres.id"), primary_key=True)
    )


class Show(db.Model):
    __tablename__ = 'shows'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable = False)
    thumbnail_url = db.Column(db.Text, nullable = False)
    title_pic_url = db.Column(db.Text, nullable = False)
    background_art_url = db.Column(db.Text, nullable = False)
    details_body = db.Column(db.Text, nullable = False)
    studio = db.Column(db.String(50), nullable = False)
    year = db.Column(db.String(50), nullable = False)
    video_url = db.Column(db.Text, nullable = False)


    # create a many to many relationship with watchlist_shows
    watchlists = db.relationship("Watchlist", secondary="watchlist_shows", back_populates="shows")

    # create a many to many relationship with show_genre
    genres = db.relationship("Genre", secondary="show_genres", back_populates="genre_shows")



# to dict function here
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'thumbnail_url': self.thumbnail_url,
            'title_pic_url': self.title_pic_url,
            'background_art_url': self.background_art_url,
            'details_body': self.details_body,
            'studio': self.studio,
            'year': self.year,
            'video_url': self.video_url

            # can establish new keys for relationships above like below
            # 'user_name': self.runnings.to_dict(),
            # 'comments': [comment.to_dict() for comment in self.comments]

        }

    def main_to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'thumbnail_url': self.thumbnail_url
        }
