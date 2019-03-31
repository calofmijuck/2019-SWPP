import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Meeting from '../../atoms/Meeting'

const Styledul = styled.ul`
  font-family: ${font('primary')};
`

export const MeetingList = ({ meetingliststate = [], onMeetingClick }) => {
    return (
        <Styledul>
            { meetingliststate.map(meet =>
                <Meeting key={meet.id} {...meet}
                />
            )}
        </Styledul>
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
