import {ADD_ERROR,ORDERS} from "../actions/actionTypes"


const INITIAL_STATE = {
 ordersList:[],

 
  };
  
  export default (state = INITIAL_STATE, action) => {
    // console.log("auth",state,action.payload);
    // return state
    switch (action.type) {
      case ADD_ERROR:
        return {...state, ordersList: action.payload};
        case ORDERS:
          return {...state, ordersList: action.payload};
  
      default:
        return state;
    }
  };