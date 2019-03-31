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

export const POST_MEETING_REQUEST = 'POST_MEETING_REQUEST'
export const DEL_MEETING = 'DEL_MEETING'
export const FETCH_MEETINGS = 'FETCH_MEETINGS'
export const RESET = 'RESET'

export const delMeeting = (id, usr, pass) => {
    return {
        type: DEL_MEETING,
        id, usr, pass
    }
}

export const postMeetingRequest = (sw, tw, usr, pass) => {
    return {
	type: POST_MEETING_REQUEST,
	// text
    sw, tw, usr, pass
    }
}

export const fetchMeetings = () => {
    return {
        type: FETCH_MEETINGS,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}
