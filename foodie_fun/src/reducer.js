import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILED,
} from './actions'

const initialState = {
  isLoading: false,
  error: null,
  userData: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    
  }
}