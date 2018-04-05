import { user } from '../constants'

const initialState = {
  data: null,
  isLoading: false,
  errors: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case user.LOGIN_REQUEST:
      return { ...initialState, isLoading: true }

    case user.LOGIN_SUCCEED:
      return { data: payload, isLoading: false }

    case user.LOGIN_FAILED:
      return { ...initialState, errors: payload }

    case user.SIGNUP_REQUEST:
      return { ...initialState, isLoading: true }

    case user.SIGNUP_SUCCEED:
      return { data: payload, isLoading: false }

    case user.SIGNUP_FAILED:
      return { ...initialState, errors: payload }
      
    case user.AUTH_REQUEST:
      return { ...initialState, isLoading: true }

    case user.AUTH_SUCCEED:
      return { data: payload, isLoading: false }

    case user.AUTH_FAILED:
      return initialState

    default:
      return state
  }
}