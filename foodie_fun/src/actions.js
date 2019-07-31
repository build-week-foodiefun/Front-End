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

export const ADD_MEAL_START = 'ADD_MEAL_START'
export const ADD_MEAL_SUCCESS = 'ADD_MEAL_SUCCESS'
export const ADD_MEAL_FAILED = 'ADD_MEAL_FAILED'

export const GET_MEAL_START = 'GET_MEAL_START'
export const GET_MEAL_SUCCESS = 'GET_MEAL_SUCCESS'
export const GET_MEAL_FAILED = 'GET_MEAL_FAILED'

export const UPDATE_MEAL_START = 'UPDATE_MEAL_START'
export const UPDATE_MEAL_SUCCESS = 'UPDATE_MEAL_SUCCESS'
export const UPDATE_MEAL_FAILED = 'UPDATE_MEAL_FAILED'

export const DELETE_MEAL_START = 'DELETE_MEAL_START'
export const DELETE_MEAL_SUCCESS = 'DELETE_MEAL_SUCCESS'
export const DELETE_MEAL_FAILED = 'DELETE_MEAL_FAILED'

export const MEAL_ID = 'MEAL_ID'



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

export function getAccount() {
  return (dispatch) => {
    dispatch({type: GET_ACCOUNT_START})

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.get('https://build-week-foodiefun.herokuapp.com/api/meals/', {headers})
      .then((res) => {
        dispatch({type: GET_ACCOUNT_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: GET_ACCOUNT_FAILED, payload: err.response.data})
      })
  }
}

export function addMeal(payload) {
  return (dispatch) => {
    dispatch({type: ADD_MEAL_START})

    const headers = {
      Authorization: localStorage.getItem('token'),
    }
    console.log(payload)

    axios.post('https://build-week-foodiefun.herokuapp.com/api/meals', payload, { headers })
      .then((res) => {
        dispatch({type: ADD_MEAL_SUCCESS, payload: res.data})
      })
      .catch((err) => {
        console.log(err)
        dispatch({type: ADD_MEAL_FAILED, payload: err})
      })
  }
}

export function getMeal(id) {
  return (dispatch) => {
    dispatch({ type: GET_MEAL_START })

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.get(`https://build-week-foodiefun.herokuapp.com/api/meals/${id}`, { headers })
      .then((res) => {
        dispatch({ type: GET_MEAL_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: GET_MEAL_FAILED, payload: err.response.data })
      })
  }
}

export function updateMeal(payload, id) {
  return (dispatch) => {
    dispatch({ type: UPDATE_MEAL_START })

    const headers = {
      Authorization: localStorage.getItem('token'),
    }
    console.log(payload)
    axios.put(`https://build-week-foodiefun.herokuapp.com/api/meals/${id}`, payload, { headers })
      .then((res) => {
        dispatch({ type: UPDATE_MEAL_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: UPDATE_MEAL_FAILED, payload: err.response })
      })
  }
}

export function deleteMeal(id) {
  return (dispatch) => {
    dispatch({ type: DELETE_MEAL_START })

    const headers = {
      Authorization: localStorage.getItem('token'),
    }

    axios.delete(`https://build-week-foodiefun.herokuapp.com/api/meals/${id}`, { headers })
      .then((res) => {
        dispatch({ type: DELETE_MEAL_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: DELETE_MEAL_FAILED, payload: err.response })
      })
  }
}

export function mealID(id) {
  return {
    type: MEAL_ID,
    payload: id
  }
}

