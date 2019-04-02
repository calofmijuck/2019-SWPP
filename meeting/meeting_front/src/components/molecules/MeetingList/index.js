import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Meeting from '../../atoms/Meeting'

const Styledul = styled.ul`
  font-family: ${font('primary')};
`

export const MeetingList = ({ meetingliststate = [], onMeetingClick }) => {
    return (
        <table className="MeetingList">
        <tbody>
            <tr className="Header">
                <td className="ID">ID</td>
                <td className="User">User</td>
                <td className="sinceWhen">sinceWhen</td>
                <td className="tilWhen">tilWhen</td>
            </tr>
            { meetingliststate.map(meet =>
                <Meeting key={meet.id} {...meet}
                />
            )}
        </tbody>
        </table>
    )
}


MeetingList.propTypes = {
    meetingliststate: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        sinceWhen: PropTypes.string,
        tilWhen: PropTypes.string
    })),
    reverse: PropTypes.bool,
    // children: PropTypes.node,
}

export default MeetingList
