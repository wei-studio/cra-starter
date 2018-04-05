import jwtDecode from 'jwt-decode'
import reactLoadable from 'react-loadable'

import Loading from '../components/Loading'

export const jwt = (token) => {
  return jwtDecode(token).exp > Math.ceil(Date.now() / 1000)
}

export const loadable = (opts) => {
  return reactLoadable(Object.assign({
    loading: Loading,
    delay: 200
  }, opts))
}