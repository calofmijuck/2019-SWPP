import { initialState } from './selectors'

const delMeeting = (t, action) => {
    if(t.id !== action.id) {
        return t
    }
    return {
        ...t,
        deleted: !t.deleted
    }
}

const meeting_reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MEETING':
            return [
                ...state,
                {
                    id: action.id,
                    sinceWhen: action.sinceWhen,
                    tilWhen: action.tilWhen,
                    deleted: false
                }
            ]
        case 'DEL_MEETING':
            return state.map(t => delMeeting(t, action))
        case 'FETCH_SUCCEEDED':
            var arr = action.data
            var ret = []
            var i = 0;
            for(; i < arr.length; ++i) {
                ret.push(arr[i])
            }
            console.log(ret)
            return ret
        case 'RESET':
            return []
        default:
            return state;
    }
}

export default meeting_reducer
