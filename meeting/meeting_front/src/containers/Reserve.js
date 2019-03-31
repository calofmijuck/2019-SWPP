import { connect } from 'react-redux'
import { Reserve } from '../components/molecules/Reserve'
import { addMeeting, postMeetingRequest, fetchMeetings, reset, delMeeting } from '../store/meeting/actions'

const mapStateToProps = (state) => {
    return {
	    statefunction : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
	    onAdd: (sw, tw) => {
	        dispatch(addMeeting(sw, tw))
	    },
	    onPost: (sw, tw, usr, pass) => {
	        dispatch(postMeetingRequest(sw, tw, usr, pass))
            dispatch(fetchMeetings())
	    },
        onFetch: () => {
            console.log("Fetched")
            dispatch(fetchMeetings())
        },
        onLogout: () => {
            dispatch(reset())
        },
        onDelete: (id, usr, pass) => {
            dispatch(delMeeting(id, usr, pass))
            dispatch(fetchMeetings())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserve)
