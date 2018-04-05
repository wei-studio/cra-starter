import { user } from '../constants'

export const loginRequest = () => {
  return {
    type: user.LOGIN_REQUEST
  }
}

export const loginSucceed = (data) => {
  return {
    type: user.LOGIN_SUCCEED,
    payload: data
  }
}

export const loginFailed = (errors) => {
  return {
    type: user.LOGIN_FAILED,
    payload: errors
  }
}

export const signUpRequest = () => {
  return {
    type: user.SIGNUP_REQUEST
  }
}

export const signUpSucceed = (data) => {
  return {
    type: user.SIGNUP_SUCCEED,
    payload: data
  }
}

export const signUpFailed = (errors) => {
  return {
    type: user.SIGNUP_FAILED,
    payload: errors
  }
}

export const authRequest = (token) => {
  return {
    type: user.AUTH_REQUEST,
    payload: token
  }
}

export const authSucceed = (data) => {
  return {
    type: user.AUTH_SUCCEED,
    payload: data
  }
}

export const authFailed = () => {
  return {
    type: user.AUTH_FAILED
  }
}
