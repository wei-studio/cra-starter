import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import ThemeProvider from './config/ThemeProvider'
import store from './config/store'

import 'typeface-roboto'
import './index.css'
import App from './containers/App'

const renderTarget = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  renderTarget
)
