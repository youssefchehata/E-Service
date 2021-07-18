// import * as T from '../actions/actionTypes';
import {
  ADD_ERROR,
  CLEAR_ERROR,
  LOGIN_SUCCESS,
  SIGNUP,
  SIGNOUT,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  loading: null,
  user: '', //token input
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  // console.log("auth",state,action.payload);
  // return state
  switch (action.type) {
    case ADD_ERROR:
      return {...state, errorMessage: action.payload};

    case CLEAR_ERROR:
      return {...state, errorMessage: ''};

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        username: '',
        password: '',
      };

    case SIGNUP:
      return {
        ...state,
        user: action.payload,
        loading: false,
        username: '',
        password: '',
      };

    case SIGNOUT:
      return {
        ...state,
        user: '',
        errorMessage: '',
        loading: false,
        username: '',
        password: '',
      };

    default:
      return state;
  }
};
