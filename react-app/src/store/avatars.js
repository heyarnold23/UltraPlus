const GET_AVATARS = 'profiles/GET_AVATARS'



const getAvatars = (avatars) => {
    return {
        type: GET_AVATARS,
        payload: avatars
    }
}


export const getAvatarsThunk = () => async (dispatch) => {
    const response = await fetch(`/api/profiles/avatars`)

    if (response.ok){
        let data = await response.json();
        dispatch(getAvatars(data))
        return data
    }
}

const initialState = {}
export default function avatarsReducer(state= initialState, action) {
    let newState = {...state}
    switch (action.type) {
        case GET_AVATARS:
            newState = {...state, ...action.payload}
            return newState
        // case ADD_COMMENT:
        //     return {
        //         ...state,
        //             [action.newComment.id]: action.newComment,
        //             // ...action.newComment,
        //         };
        // case UPDATE_COMMENT: {
        //     return {
        //         ...state,
        //         [action.comment.id]: action.comment,
        //     };
        // }
        // case DELETE_COMMENT:
        //     delete newState[action.payload]
        //     return newState
        default:
            return state
    }
}
