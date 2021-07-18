import { combineReducers } from 'redux';
import authReducer from './authReducer';


// import placesReducer from './places';

export default combineReducers({
 auth: authReducer,

  // places: placesReducer
});
