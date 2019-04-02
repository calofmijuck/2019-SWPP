import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 10px 0px 10px 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  div {
      width: 90%;
      margin: 0px auto 0px auto;
      align: center;
      text-align: center;
  }
  table.MeetingList {
      border-collapse: collapse;
      width: 80%;
      margin: 0px auto 0px auto;
  }
  td {
      border: 0.5px solid black;
  }
  tr {
      height: 30px;
  }
  tr.Header {
      border-bottom: 3px solid black !important;
      font-weight: bold;
      font-size: 120%;
  }
  td.ID {
      width: 5%;
  }
  td.User {
      width: 20%;
  }
  td.sinceWhen {
      width: 35%;
  }
  td.tilWhen {
      width: 35%;
  }
`

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
