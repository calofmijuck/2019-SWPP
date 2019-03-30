import { connect } from 'react-redux'
import { delMeeting } from '../store/meeting/actions'
import { MeetingList } from '../components/molecules/MeetingList'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        meetingliststate: state.meeting
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onMeetingClick: (id) => {
            dispatch(delMeeting(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
