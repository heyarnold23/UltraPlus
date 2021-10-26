from flask.cli import AppGroup
from .users import seed_users, undo_users
from .avatars import seed_avatars, undo_avatars
from .profiles import seed_profiles, undo_profiles
from .genres import seed_genres, undo_genres
from .shows import seed_shows, undo_shows
from .watchlists import seed_watchlists, undo_watchlists

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_avatars()
    seed_profiles()
    seed_genres()
    seed_shows()
    seed_watchlists()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_avatars()
    undo_profiles()
    undo_genres()
    undo_shows()
    undo_watchlists()
    # Add other undo functions here
