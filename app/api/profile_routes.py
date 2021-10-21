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

# @comment_routes.route('/edit/<int:id>', methods=["PUT"])
# @login_required
# def updateComment(id):
#     print("inside api routeee id", id)
#     comment = Comment.query.get(id)
#     comment.body = request.json.get('body', comment.body)
#     db.session.commit()
#     return comment.to_dict()

# @comment_routes.route('/delete/<int:id>')
# @login_required
# def deleteComment(id):
#     comment = Comment.query.get(id)
#     db.session.delete(comment)
#     db.session.commit()
#     return {
#         'deleted_comment': comment.to_dict()
#     }

# @comment_routes.route('')
# def comments():
#     print("Comments hitting hard")
#     comments = Comment.query.all()
#     return {comment.id:comment.to_dict() for comment in comments}

# @comment_routes.route('', methods=["POST"])
# @login_required
# def postComment():
#     form = CommentForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit():
#         comment = Comment(
#             body=form.data['body'],
#             author_id=form.data['author_id'],
#             run_id=form.data['run_id']
#         )
#         db.session.add(comment)
#         db.session.commit()
#         return comment.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401
