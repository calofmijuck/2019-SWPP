import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Cancel = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Cancel.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Cancel.defaultProps = {
  palette: 'grayscale',
}

export default Cancel
