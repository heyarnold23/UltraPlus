from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.forms.watchlist_form import WatchlistForm
from app.models import Watchlist, db
from app.api.auth_routes import validation_errors_to_error_messages


watchlist_routes = Blueprint('watchlists', __name__)

# this route for getting a profiles watchlists
@watchlist_routes.route('/<int:id>')
def watchlists_by_profile_id(id):
    watchlists = Watchlist.query.filter(
        Watchlist.profile_id == id
    )
    return {watchlist.id:watchlist.to_dict() for watchlist in watchlists}

# this route for getting a watchlists shows
@watchlist_routes.route('/<int:id>/shows')
def watchlists_shows(id):
    watchlist = Watchlist.query.get(id)
    return {'shows': [show.main_to_dict() for show in watchlist.shows]}

@watchlist_routes.route('', methods=["POST"])
@login_required
def postWatchlist():
    form = WatchlistForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        watchlist = Watchlist(
            name=form.data['name'],
            profile_id=form.data['profile_id']
        )
        db.session.add(watchlist)
        db.session.commit()
        return watchlist.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@watchlist_routes.route('/edit/<int:id>', methods=["PUT"])
@login_required
def update_watchlist(id):
    # print("inside api routeee id", id)
    watchlist = Watchlist.query.get(id)
    got_name = request.json.get('name', watchlist.name)
    if len(got_name) < 1 or len(got_name) > 50 or got_name.isspace():
        return {'errors': 'Must be between 1 to 50 characters'}, 401
    watchlist.name = request.json.get('name', watchlist.name)
    db.session.commit()
    return watchlist.to_dict()

@watchlist_routes.route('/delete/<int:id>')
@login_required
def delete_watchlist(id):
    watchlist = Watchlist.query.get(id)
    db.session.delete(watchlist)
    db.session.commit()
    return {
        'deleted_watchlist': watchlist.to_dict()
    }

# @comment_routes.route('')
# def comments():
#     print("Comments hitting hard")
#     comments = Comment.query.all()
#     return {comment.id:comment.to_dict() for comment in comments}
