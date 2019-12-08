import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

import App from './student-list'
import StudentProvider from './student-provider'

ReactDOM.render(
  <MuiThemeProvider>
    <StudentProvider>
      <App />
    </StudentProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
