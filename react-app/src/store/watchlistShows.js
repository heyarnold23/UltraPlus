const GET_WATCHLIST_SHOWS = 'shows/GET_WATCHLIST_SHOWS'
const ADD_SHOW = 'watchlistShows/ADD_SHOW'
const REMOVE_SHOW = 'watchlistShows/REMOVE_SHOW'

const getWatchlistShows = (shows) => {
    return {
        type: GET_WATCHLIST_SHOWS,
        payload: shows
    }
}

const addShow = (data) => ({
    type: ADD_SHOW,
    payload: data
})

// const removeShow = (data) => ({
//     type: REMOVE_SHOW,
//     payload: data
// })

// const updateWatchlist = (watchlist) => ({
//     type: UPDATE_WATCHLIST,
//     watchlist,
// });

// const deleteWatchlist = (deletedWatchlist) => {
//     return {
//         type: DELETE_WATCHLIST,
//         payload: deletedWatchlist
//     }
// }


// this gets all watchlists one profile has
// export const getWatchlistsThunk = (profileId) => async (dispatch) => {
//     const response = await fetch(`/api/watchlists/${profileId}`)

//     if (response.ok){
//         let data = await response.json();
//         dispatch(getWatchlists(data))
//         return data
//     }
// }

export const getWatchlistShowsThunk = (watchlistId) => async (dispatch) => {
    const response = await fetch(`/api/watchlists/${watchlistId}/shows`)

    if (response.ok){
        let data = await response.json();
        dispatch(getWatchlistShows(data))
        return data
    }
}

export const addShowThunk = (data) => async dispatch => {
    const response = await fetch(`/api/watchlists/${data.watchlist_id}/shows`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    if(response.ok){
        const data = await response.json();
        dispatch(addShow(data));
        return (data);
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            const errors = Object.values(data)
            return errors;
        }
    } else {
        return ['An error occurred. Please try again.']
      }

}

export const removeShowThunk = (data) => async dispatch => {
    const response = await fetch(`/api/watchlists/${data.watchlist_id}/shows`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const data = await response.json();
        let shows = []

        for (let show of data.shows) {
            shows.push(show)
        }

        dispatch(getWatchlistShows({ "shows": shows }))
        return null;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}



// export const editWatchlist = (watchlist) => async (dispatch) => {
//     const response = await fetch (`/api/watchlists/edit/${watchlist.id}`, {
//       method: 'PUT',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(watchlist),
//     });
//     if(response.ok) {
//       const watchlist = await response.json();
//       dispatch(updateWatchlist(watchlist));
//       return watchlist;
//     } else if (response.status < 500) {
//         const data = await response.json();
//         if (data.errors) {
//             const errors = Object.values(data)
//             return errors;
//         }
//     } else {
//         return ['An error occurred. Please try again.']
//     }
// };


// export const deleteWatchlistThunk = (watchlistData) => async (dispatch) => {
//     const response = await fetch(`/api/watchlists/delete/${watchlistData.id}`);
//     if(response.ok){
//         dispatch(deleteWatchlist(watchlistData.id))
//     }else{
//         //error stuff
//     }
// }

const initialState = {}
export default function watchlistsShowsReducer(state= initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case GET_WATCHLIST_SHOWS:{
            // newState.watchlistShows=action.payload
            newState = {...state, ...action.payload}
            return newState
        }
        case ADD_SHOW:
            // return {
            //     ...state,
            //         [action.watchlist.id]: action.watchlist,
            //     };
            newState = {...state, ...action.payload}
            return newState
        // case UPDATE_WATCHLIST: {
        //     return {
        //         ...state,
        //         [action.watchlist.id]: action.watchlist,
        //     };
        // }
        // case DELETE_WATCHLIST:
        //     delete newState[action.payload]
        //     return newState
        default:
            return state
    }
}
