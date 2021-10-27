from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class WatchlistForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired(), Length(min=1, max=50, message="Must be between 1 to 50 characters")])
    profile_id = IntegerField('profile_id', validators=[DataRequired()])
