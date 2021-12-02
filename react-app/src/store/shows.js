const GET_SHOWS = 'shows/GET_SHOWS'
const GET_ONE_SHOW = 'shows/GET_ONE_SHOW'
const GET_SEARCHED_SHOWS = 'shows/GET_SEARCHED_SHOWS'
// const SET_PROFILE = 'profiles/SET_PROFILE'
// const REMOVE_PROFILE = 'profiles/REMOVE_PROFILE'
// const ADD_PROFILE = 'profiles/ADD_PROFILE'
// const UPDATE_PROFILE = "profiles/UPDATE_PROFILE";
// const DELETE_PROFILE = 'profiles/DELETE_PROFILE'

const getShows = (shows) => {
    return {
        type: GET_SHOWS,
        payload: shows
    }
}

const getOneShow = (show) => {
    return {
        type: GET_ONE_SHOW,
        payload: show
    }
}

const getSearchedShows = (results) => {
    return {
        type: GET_SEARCHED_SHOWS,
        payload: results
    }
}


export const getShowsThunk = () => async (dispatch) => {
    const response = await fetch(`/api/shows`)

    if (response.ok){
        let data = await response.json();
        dispatch(getShows(data))
        return data
    }
}

export const getOneShowThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/shows/${id}`)

    if (response.ok){
        let data = await response.json();
        dispatch(getOneShow(data))
        return data
    }
}

export const getSearchedShowsThunk = (search) => async (dispatch) => {
    const response = await fetch(`/api/shows/search/${search}`)

    if (response.ok) {
        let data = await response.json();
        dispatch(getSearchedShows(data))
        return data
    } else if (response.status === 404){
        return null;
    }
}



const initialState = {}
export default function showsReducer(state= initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case GET_SHOWS:
            newState = {...action.payload}
            return newState
        case GET_ONE_SHOW:
            newState = {...action.payload}
            return newState
        case GET_SEARCHED_SHOWS:
            newState = {...action.payload}
            return newState

        default:
            return state
    }
}
