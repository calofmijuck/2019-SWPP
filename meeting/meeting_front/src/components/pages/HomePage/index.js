import React from 'react'
import Reserve from '../../../containers/Reserve'
import MeetingList from '../../../containers/MeetingList'

import { PageTemplate } from 'components'

const HomePage = () => {
    return (
        <div>
            <p> <b>Reservation System</b> </p>
            <Reserve/><br/>
            <MeetingList/>
        </div>
    )
}

export default HomePage
