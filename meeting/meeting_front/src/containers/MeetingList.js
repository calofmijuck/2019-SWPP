import { connect } from 'react-redux'
import { delMeeting } from '../store/meeting/actions'
import { MeetingList } from '../components/molecules/MeetingList'
import { fetchMeetings } from '../store/meeting/actions'

const mapStateToProps = (state) => {
    console.log(state)
    return {
        meetingliststate: state.meeting
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
