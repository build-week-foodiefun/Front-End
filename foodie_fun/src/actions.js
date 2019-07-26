import axios from 'axios'

export const CREATE_USER_START = 'CREATE_USER_START'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const GET_ACCOUNT_START = 'GET_DATA_START'
export const GET_ACCOUNT_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_ACCOUNT_FAILED = 'GET_DATA_FAILED'


export function createUser(username, password) {
  return (dispatch) => {
    dispatch({type: CREATE_USER_START})

    return axios.post('https://build-week-foodiefun.herokuapp.com/api/auth/register', {username, password})
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({type: CREATE_USER_SUCCESS})
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err
        dispatch({type: CREATE_USER_FAILED, payload})
      })
  }
}

export function login(username, password) {
  return (dispatch) => {
    dispatch({type: LOGIN_START})

    return axios.post('https://build-week-foodiefun.herokuapp.com/api/auth/login', {username, password})
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS })
      })
      .catch((err) => {
        const payload = err.response ? err.response.data : err
        dispatch({ type: LOGIN_FAILED, payload })
      })
  }
}

export default getAccount() {
  return (dispatch) => {
    dispatch({GET_ACCOUNT_START})

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.get('https://build-week-foodiefun.herokuapp.com/api/meals/', {headers})
      .then((res) => {
        dispatch({type: GET_ACCOUNT_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        dispatch({type: GET_ACCOUNT_FAILED, payload: err.response.data})
      })
  }
}