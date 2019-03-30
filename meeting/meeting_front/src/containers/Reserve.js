import { connect } from 'react-redux'
import { Reserve } from '../components/molecules/Reserve'
import { addMeeting, postMeetingRequest } from '../store/meeting/actions'

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
	    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reserve)
