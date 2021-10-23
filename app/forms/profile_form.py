from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class ProfileForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired(), Length(min=1, max=25, message="Must be between 1 to 25 characters")])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    avatar_id = IntegerField('avatar_id', validators=[DataRequired()])
