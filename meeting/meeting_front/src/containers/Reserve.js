import { connect } from 'react-redux'
import { Reserve } from '../components/molecules/Reserve'
import { addMeeting, postMeetingRequest, fetchMeetings } from '../store/meeting/actions'

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
	    onPost: (sw, tw) => {
	        dispatch(postMeetingRequest(sw, tw))
	    },
        onFetch: () => {
            dispatch(fetchMeetings())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserve)
