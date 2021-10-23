from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms.profile_form import ProfileForm
from app.models import Profile, db, Avatar
from app.api.auth_routes import validation_errors_to_error_messages


profile_routes = Blueprint('profiles', __name__)

@profile_routes.route('/avatars')
def avatars():
    avatars = Avatar.query.all()
    return {avatar.id:avatar.to_dict() for avatar in avatars}

@profile_routes.route('/<int:id>')
def profiles_by_user_id(id):
    profiles = Profile.query.filter(
        Profile.user_id == id
    )
    return {profile.id:profile.to_dict() for profile in profiles}

@profile_routes.route('/edit/<int:id>', methods=["PUT"])
@login_required
def update_profile(id):
    # print("inside api routeee id", id)
    profile = Profile.query.get(id)
    profile.name = request.json.get('name', profile.name)
    profile.avatar_id = request.json.get('avatar_id', profile.avatar_id)
    db.session.commit()
    return profile.to_dict()

@profile_routes.route('/delete/<int:id>')
@login_required
def delete_profile(id):
    profile = Profile.query.get(id)
    db.session.delete(profile)
    db.session.commit()
    return {
        'deleted_profile': profile.to_dict()
    }

# @comment_routes.route('')
# def comments():
#     print("Comments hitting hard")
#     comments = Comment.query.all()
#     return {comment.id:comment.to_dict() for comment in comments}

@profile_routes.route('', methods=["POST"])
@login_required
def postComment():
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        profile = Profile(
            name=form.data['name'],
            user_id=form.data['user_id'],
            avatar_id=form.data['avatar_id']
        )
        db.session.add(profile)
        db.session.commit()
        return profile.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
