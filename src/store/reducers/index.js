import { combineReducers } from 'redux';
import authReducer from './authReducer';
import servicesReducer from './servicesReducer';


// import placesReducer from './places';

export default combineReducers({
 auth: authReducer,
 services:servicesReducer

  // places: placesReducer
});
