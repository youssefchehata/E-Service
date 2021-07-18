import {
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
  SIGNOUT_USER,
  ADD_ERROR_MESSAGE,
  ADD_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  // username: '13001',
  // password: '13001',
  // username: '2010001',
  // password: '0001',
  loading: null,
  user: '', //token input
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  // console.log("auth",state,action.payload);
  // return state
  switch (action.type) {
    case ADD_ERROR_MESSAGE:
      return {...state, errorMessage: action.payload};

    case CLEAR_ERROR_MESSAGE:
      return {...state, errorMessage: ''};

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        username: '',
        password: '',
      };

    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        username: '',
        password: '',
      };

    case SIGNOUT_USER:
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
