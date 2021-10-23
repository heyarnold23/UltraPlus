from .db import db





class Avatar(db.Model):
    __tablename__ = 'avatars'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.Text, nullable = False)


    # create a one to many relationship with profiles
    avatar_profiles = db.relationship("Profile", back_populates="avatar", lazy='subquery')


# to dict function here
    def to_dict(self):
        return {
            'id': self.id,
            'image_url': self.image_url

            # can establish new keys for relationships above like below
            # 'user_name': self.runnings.to_dict(),
            # 'comments': [comment.to_dict() for comment in self.comments]

        }
