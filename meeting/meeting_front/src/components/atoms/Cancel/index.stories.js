import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Cancel from '.'

storiesOf('Cancel', module)
  .add('default', () => (
    <Cancel>Hello</Cancel>
  ))
  .add('reverse', () => (
    <Cancel reverse>Hello</Cancel>
  ))
