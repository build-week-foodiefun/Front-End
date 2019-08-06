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
  GET_MEAL_START,
  GET_MEAL_SUCCESS,
  GET_MEAL_FAILED,
  ADD_MEAL_START,
  ADD_MEAL_SUCCESS,
  ADD_MEAL_FAILED,
  UPDATE_MEAL_START,
  UPDATE_MEAL_SUCCESS,
  UPDATE_MEAL_FAILED,
  DELETE_MEAL_START,
  DELETE_MEAL_SUCCESS,
  DELETE_MEAL_FAILED,
  MEAL_ID,
} from './actions'

const initialState = {
  isLoading: false,
  error: null,
  userData: [],
  userMeal: {},
  mealChange: '',
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CREATE_USER_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    }
    case CREATE_USER_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case LOGIN_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case LOGIN_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    }
    case LOGIN_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case GET_ACCOUNT_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_ACCOUNT_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
        userData: action.payload
      }
    }
    case GET_ACCOUNT_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case ADD_MEAL_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ADD_MEAL_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
        mealChange: action.payload
      }
    }
    case ADD_MEAL_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case UPDATE_MEAL_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case UPDATE_MEAL_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
        mealChange: action.payload
      }
    }
    case UPDATE_MEAL_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case DELETE_MEAL_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case DELETE_MEAL_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
        mealChange: action.payload
      }
    }
    case DELETE_MEAL_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case GET_MEAL_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_MEAL_SUCCESS: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: null,
        userMeal: action.payload
      }
    }
    case GET_MEAL_FAILED: {
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }
    }
    case MEAL_ID: {
      console.log(action.payload)
      return {
        ...state,
        mealID: action.payload
      }
    }
    default:
      return state
  }
}