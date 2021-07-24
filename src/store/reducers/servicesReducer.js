import {GET_SERVICES} from "../actions/actionTypes"


const INITIAL_STATE = {
 services:[]
  };
  
  export default (state = INITIAL_STATE, action) => {
    // console.log("auth",state,action.payload);
    // return state
    switch (action.type) {
      case GET_SERVICES:
        return {...state, services: action.payload};

  
      default:
        return state;
    }
  };
  