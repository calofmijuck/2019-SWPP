import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Meeting from '.'

storiesOf('Meeting', module)
  .add('default', () => (
    <Meeting>Hello</Meeting>
  ))
  .add('reverse', () => (
    <Meeting reverse>Hello</Meeting>
  ))
