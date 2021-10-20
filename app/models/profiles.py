from .db import db





class Profile(db.Model):
    __tablename__ = 'profiles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(25), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"),  nullable = False)
    avatar_id = db.Column(db.Integer, db.ForeignKey("avatars.id"),  nullable = False)


    # create a many to one relationship with users (receiving end)
    user = db.relationship("User", back_populates='user_profiles')

    # create a many to one relationship with avatar_pics (receiving end)
    avatar = db.relationship("Avatar", back_populates='avatar_profiles')

    # create a one to many relationship with watchlists
    profile_watchlists = db.relationship('Watchlist', back_populates="profile")



# to dict function here
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'user_id': self.user_id,
            'avatar_pic_id': self.avatar_pic_id,
            # can establish new keys for relationships above like below
            # 'user_name': self.runnings.to_dict(),
            # 'comments': [comment.to_dict() for comment in self.comments]

        }
