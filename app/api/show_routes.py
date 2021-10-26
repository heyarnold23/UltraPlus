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

# @profile_routes.route('/set/<int:id>')
# def profiles_by_profile_id(id):
#     profile = Profile.query.get(id)
#     return profile.to_dict()

# @profile_routes.route('/edit/<int:id>', methods=["PUT"])
# @login_required
# def update_profile(id):
#     # print("inside api routeee id", id)
#     profile = Profile.query.get(id)
#     got_name = request.json.get('name', profile.name)
#     if len(got_name) < 1 or len(got_name) > 25 or got_name.isspace():
#         return {'errors': 'Must be between 1 to 25 characters'}, 401
#     profile.name = request.json.get('name', profile.name)
#     profile.avatar_id = request.json.get('avatar_id', profile.avatar_id)
#     db.session.commit()
#     return profile.to_dict()

# @profile_routes.route('/delete/<int:id>')
# @login_required
# def delete_profile(id):
#     profile = Profile.query.get(id)
#     db.session.delete(profile)
#     db.session.commit()
#     return {
#         'deleted_profile': profile.to_dict()
#     }

# @comment_routes.route('')
# def comments():
#     print("Comments hitting hard")
#     comments = Comment.query.all()
#     return {comment.id:comment.to_dict() for comment in comments}

# @profile_routes.route('', methods=["POST"])
# @login_required
# def postComment():
#     form = ProfileForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         profile = Profile(
#             name=form.data['name'],
#             user_id=form.data['user_id'],
#             avatar_id=form.data['avatar_id']
#         )
#         db.session.add(profile)
#         db.session.commit()
#         return profile.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
