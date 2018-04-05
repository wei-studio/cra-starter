import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { initialize, addTranslationForLanguage } from 'react-localize-redux'

import * as constants from './constants'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const enhancers = []
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)

const EN = require('../locales/en.json')
const FA = require('../locales/fa.json')

const languages = [
  {name: 'English', code: 'en'},
  {name: 'فارسی', code: 'fa'}
]

store.dispatch(initialize(languages, { defaultLanguage: constants.DEFAULT_LANGUAGE }))
store.dispatch(addTranslationForLanguage(EN, 'en'))
store.dispatch(addTranslationForLanguage(FA, 'fa'))

export default store