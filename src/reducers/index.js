import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { localeReducer } from 'react-localize-redux'

import userReducer from './user-reducer'

export default combineReducers({
  router: routerReducer,
  locale: localeReducer,
  user: userReducer
})