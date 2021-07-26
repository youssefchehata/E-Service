import {GET_SERVICES,QTE} from "../actions/actionTypes"


const INITIAL_STATE = {
 services:[],
 qte:{}
  };
  
  export default (state = INITIAL_STATE, action) => {
    // console.log("auth",state,action.payload);
    // return state
    switch (action.type) {
      case GET_SERVICES:
        return {...state, services: action.payload};
        case QTE:
          return {...state, qte: action.payload};
  
      default:
        return state;
    }
  };



  