import { put, takeLatest, call, all } from 'redux-saga/effects'

import { login, signup, auth } from '../api'
import { user } from '../constants'

function* loginRequest(action) {
  const response = yield call(login, action.payload)
  //yield call(delay, 5000)
  if (response.data) yield put({ type: user.LOGIN_SUCCEED, payload: response.data })
  if (response.errors) yield put({ type: user.LOGIN_FAILED, payload: response.errors })
}

function* signUpRequest(action) {
  const response = yield call(signup, action.payload)
  //yield call(delay, 5000)
  if (response.data) yield put({ type: user.SIGNUP_SUCCEED, payload: response.data })
  if (response.errors) yield put({ type: user.SIGNUP_FAILED, payload: response.errors })
}

function* authRequest(action) {
  const response = yield call(auth, action.payload)
  //yield call(delay, 5000)
  if (response.data) yield put({ type: user.AUTH_SUCCEED, payload: response.data })
  if (response.errors) yield put({ type: user.AUTH_FAILED, payload: response.errors })
}

export default function* watchUser() {
  yield all([
    takeLatest(user.LOGIN_REQUEST, loginRequest),
    takeLatest(user.SIGNUP_REQUEST, signUpRequest),
    takeLatest(user.AUTH_REQUEST, authRequest)
  ])
}
