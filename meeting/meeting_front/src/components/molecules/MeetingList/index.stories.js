import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { MeetingList } from 'components'

storiesOf('MeetingList', module)
  .add('default', () => (
    <MeetingList>Hello</MeetingList>
  ))
  .add('reverse', () => (
    <MeetingList reverse>Hello</MeetingList>
  ))
