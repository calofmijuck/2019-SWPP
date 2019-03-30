import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Reserve } from 'components'

storiesOf('Reserve', module)
  .add('default', () => (
    <Reserve>Hello</Reserve>
  ))
  .add('reverse', () => (
    <Reserve reverse>Hello</Reserve>
  ))
