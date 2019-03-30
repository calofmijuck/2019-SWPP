import { initialState } from './selectors'

const editMeeting = (t, action) => {
    if(t.id !== action.id) {
        return t
    }
    return {
        ...t,
        sinceWhen: action.sinceWhen,
        tilWhen: action.tilWhen
    }
}

const delMeeting = (t, action) => {
    if(t.id !== action.id) {
        return t
    }
    console.log("Deleted!");
    return {
        ...t,
        deleted: !t.deleted
    }
}

const meeting_reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MEETING':
        console.log("adding");
            return [
                ...state,
                {
                    id: action.id,
                    sinceWhen: action.sinceWhen,
                    tilWhen: action.tilWhen,
                    deleted: false
                    // user: action.user
                }
            ]
        // case 'EDIT_MEETING':
        //     return state.map(t => editMeeting(t, action))
        case 'DEL_MEETING':
            return state.map(t => delMeeting(t, action))
        default:
            return state;
    }
}

export default meeting_reducer
