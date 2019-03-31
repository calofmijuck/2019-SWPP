import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Styledli = styled.li`
  font-family: ${font('primary')};
`

const Meeting = ({ onClick, sinceWhen, tilWhen, deleted }) => (
    <Styledli
        onClick={onClick}
        style={{display: deleted ? 'none' : 'normal'}}
    >
        Reservation: { sinceWhen } ~ { tilWhen }
    </Styledli>
)

Meeting.propTypes = {
    sinceWhen: PropTypes.string.isRequired,
    tilWhen: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
}


export default Meeting
