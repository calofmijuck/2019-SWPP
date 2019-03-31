import React from 'react'
import Reserve from '../../../containers/Reserve'
import MeetingList from '../../../containers/MeetingList'

import { PageTemplate } from 'components'

const HomePage = () => {
    return (
        <div>
            <p> 아 과제 진짜 ... 언제 끝내냐? </p>
            <Reserve/>
            <MeetingList/>
        </div>
    )
}

export default HomePage
