import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

const Styledtr = styled.tr`
  font-family: ${font('primary')};
`


const Meeting = ({ id, user, sinceWhen, tilWhen, deleted }) => {
    var month = ['.', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var s = sinceWhen.split('T')
    var t = tilWhen.split('T')
    var sdate = s[0].split('-')
    var tdate = t[0].split('-')
    var stime = s[1].split(':')
    var ttime = t[1].split(':')
    return (
        <Styledtr>
            <td>{id}</td>
            <td>{ user }</td>
            <td>{ month[Number(sdate[1])] } { sdate[2] }, { sdate[0] }&nbsp;{ stime[0] }시 { stime[1] }분 { stime[2].substring(0, 2) }초</td>
            <td>{ month[Number(tdate[1])] } { tdate[2] }, { tdate[0] }&nbsp;{ ttime[0] }시 { ttime[1] }분 { ttime[2].substring(0, 2) }초</td>
        </Styledtr>
    )
}

Meeting.propTypes = {
    sinceWhen: PropTypes.string.isRequired,
    tilWhen: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
}


export default Meeting
