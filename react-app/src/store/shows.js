const GET_SHOWS = 'shows/GET_SHOWS'
const GET_ONE_SHOW = 'shows/GET_ONE_SHOW'
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

// set one profile thunk
// const setProfile = (profile) => {
//     return {
//         type: SET_PROFILE,
//         payload: profile
//     }
// }

// const removeProfile = () => ({
//     type: REMOVE_PROFILE
// });

// const postProfile = (profile) => ({
//     type: ADD_PROFILE,
//     profile
// })

// const updateProfile = (profile) => ({
//     type: UPDATE_PROFILE,
//     profile,
// });

// const deleteProfile = (deletedProfile) => {
//     return {
//         type: DELETE_PROFILE,
//         payload: deletedProfile
//     }
// }


// this gets all profiles one user has
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

// setOneProfile thunk
// export const setProfileThunk = (id) => async (dispatch) => {
//     const response = await fetch(`/api/profiles/set/${id}`);


//     if (response.ok) {
//       const data = await response.json();
//       dispatch(setProfile(data))
//       return null;
//     } else if (response.status < 500) {
//       const data = await response.json();
//       if (data.errors) {
//         return data.errors;
//       }
//     } else {
//       return ['An error occurred. Please try again.']
//     }

// }

// export const removeProfileThunk = () => async (dispatch) => {
//       dispatch(removeProfile());
// };



// export const addProfile = (profile) => async dispatch => {
//     // const commentBody = JSON.stringify({body: newComment.body, author_id: newComment.author_id, run_id: newComment.run_id})
//     const response = await fetch('/api/profiles', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(profile)
//     });

//     if(response.ok){
//         const data = await response.json();
//         dispatch(postProfile(data));
//         return (data);
//     } else if (response.status < 500) {
//         const data = await response.json();
//         if (data.errors) {
//           return data.errors;
//         }
//     } else {
//         return ['An error occurred. Please try again.']
//       }

// }


// export const editProfile = (profile) => async (dispatch) => {
//     const response = await fetch (`/api/profiles/edit/${profile.id}`, {
//       method: 'PUT',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(profile),
//     });
//     if(response.ok) {
//       const editProfile = await response.json();
//       dispatch(updateProfile(editProfile));
//       return editProfile;
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


// export const deleteProfileThunk = (profileData) => async (dispatch) => {
//     const response = await fetch(`/api/profiles/delete/${profileData.id}`);
//     if(response.ok){
//         dispatch(deleteProfile(profileData.id))
//     }else{
//         //error stuff
//     }
// }

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
        // case SET_PROFILE:
        //     return { profile: action.payload }
        // case REMOVE_PROFILE:
        //     delete newState['profile']
        //     return newState
        // case ADD_PROFILE:
        //     return {
        //         ...state,
        //             [action.profile.id]: action.profile,
        //         };
        // case UPDATE_PROFILE: {
        //     return {
        //         ...state,
        //         [action.profile.id]: action.profile,
        //     };
        // }
        // case DELETE_PROFILE:
        //     delete newState[action.payload]
        //     return newState
        default:
            return state
    }
}
