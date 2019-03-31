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
        onMeetingClick: (id, usr, pass) => {
            dispatch(delMeeting(id, usr, pass))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList)
