from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Show
from app.api.auth_routes import validation_errors_to_error_messages


show_routes = Blueprint('shows', __name__)

@show_routes.route('')
def shows():
    shows = Show.query.all()
    return {show.id:show.main_to_dict() for show in shows}

@show_routes.route('/<int:id>')
def profiles_by_user_id(id):
    show = Show.query.get(id)
    return show.to_dict()

@show_routes.route('/search/<searchVal>')
def searchShows(searchVal):
    shows = Show.query.filter(Show.name.ilike(f'{searchVal}%'))
    return {show.id:show.main_to_dict() for show in shows}
