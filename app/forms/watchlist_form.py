from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField
from wtforms.fields.core import IntegerField
from wtforms.validators import DataRequired, Email, ValidationError


class WatchlistForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired()])
    profile_id = IntegerField('profile_id', validators=[DataRequired()])
