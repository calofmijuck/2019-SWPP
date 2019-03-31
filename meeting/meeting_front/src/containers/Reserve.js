import { connect } from 'react-redux'
import { Reserve } from '../components/molecules/Reserve'
import { addMeeting, postMeetingRequest, fetchMeetings, reset } from '../store/meeting/actions'

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
            dispatch(fetchMeetings())
        },
        onLogin: (usr, pass) => {
            dispatch(login(usr, pass))
        },
        onLogout: () => {
            dispatch(reset())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserve)
