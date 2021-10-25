const GET_PROFILES = 'profiles/GET_PROFILES'
const ADD_PROFILE = 'profiles/ADD_PROFILE'
const UPDATE_PROFILE = "profiles/UPDATE_PROFILE";
const DELETE_PROFILE = 'profiles/DELETE_PROFILE'

const getProfiles = (profiles) => {
    return {
        type: GET_PROFILES,
        payload: profiles
    }
}

const addProfile = (profile) => ({
    type: ADD_PROFILE,
    profile
})

const updateProfile = (profile) => ({
    type: UPDATE_PROFILE,
    profile,
});

const deleteProfile = (deletedProfile) => {
    return {
        type: DELETE_PROFILE,
        payload: deletedProfile
    }
}


// this gets all profiles one user has
export const getProfilesThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/profiles/${id}`)

    if (response.ok){
        let data = await response.json();
        dispatch(getProfiles(data))
        return data
    }
}


export const setProfile = (profile) => async dispatch => {
    // const commentBody = JSON.stringify({body: newComment.body, author_id: newComment.author_id, run_id: newComment.run_id})
    const response = await fetch('/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile)
    });

    if(response.ok){
        const data = await response.json();
        dispatch(addProfile(data));
        return (data);
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
    } else {
        return ['An error occurred. Please try again.']
      }

}


export const editProfile = (profile) => async (dispatch) => {
    const response = await fetch (`/api/profiles/edit/${profile.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(profile),
    });
    if(response.ok) {
      const editProfile = await response.json();
      dispatch(updateProfile(editProfile));
      return editProfile;
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            const errors = Object.values(data)
            return errors;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
};


export const deleteProfileThunk = (profileData) => async (dispatch) => {
    const response = await fetch(`/api/profiles/delete/${profileData.id}`);
    if(response.ok){
        dispatch(deleteProfile(profileData.id))
    }else{
        //error stuff
    }
}

const initialState = {}
export default function profilesReducer(state= initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case GET_PROFILES:
            console.log("THIS IS ACTION PAYLOAD",action.payload)
            newState = {...state, ...action.payload}
            return newState
        case ADD_PROFILE:
            return {
                ...state,
                    [action.profile.id]: action.profile,
                };
        case UPDATE_PROFILE: {
            return {
                ...state,
                [action.profile.id]: action.profile,
            };
        }
        case DELETE_PROFILE:
            delete newState[action.payload]
            return newState
        default:
            return state
    }
}
