let nextMeetingId = 0

export const addMeeting = (sw, tw) => {
    return {
	type: 'ADD_MEETING',
	id: nextMeetingId++,
    sinceWhen: sw,
    tilWhen: tw,
	// text // do I need to add start/end time here?
    }
}

// export const editMeeting = (text) => {
//     return {
//         type: 'EDIT_MEETING',
//         id,
//         text // Also here?
//     }
// }

export const delMeeting = (id) => {
    return {
        type: 'DEL_MEETING',
        id,
    }
}

export const POST_MEETING_REQUEST = 'POST_MEETING_REQUEST'

export const FETCH_MEETINGS = 'FETCH_MEETINGS'

export const postMeetingRequest = (sw, tw) => {
    console.log(sw)
    console.log(tw)
    return {
	type: POST_MEETING_REQUEST,
	// text
    sw, tw
    }
}

export const fetchMeetings = () => {
    return {
        type: FETCH_MEETINGS,

    }
}
