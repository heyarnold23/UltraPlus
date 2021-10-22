const GET_PROFILES = 'profiles/GET_PROFILES'
const ADD_PROFILE = 'profiles/ADD_PROFILE'
const UPDATE_PROFILE = "profiles/UPDATE_PROFILE";
// const DELETE_COMMENT = 'comment/DELETE'

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

// const deleteComment = (deletedComment) => {
//     return {
//         type: DELETE_COMMENT,
//         payload: deletedComment
//     }
// }



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
    }
    else{
        console.log("RESPONSE WAS NOT OK");
    }
};


// export const deleteCommentThunk = (commentData) => async (dispatch) => {
//     const response = await fetch(`/api/comments/delete/${commentData.id}`);
//     if(response.ok){
//         dispatch(deleteComment(commentData.id))
//     }else{
//         //error stuff
//     }
// }

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
        // case DELETE_COMMENT:
        //     delete newState[action.payload]
        //     return newState
        default:
            return state
    }
}
