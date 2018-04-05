import axios from 'axios'

export const login = (data) => {
  return axios
    .post('/api/login', data)
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const signup = (data) => {
  return axios
    .post('/api/signup', data)
    .then(res => res.data)
    .catch(err => err.response.data)
}

export const auth = (token) => {
  return axios
    .post('/api/auth', token)
    .then(res => res.data)
    .catch(err => err.response.data)
}