import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import servicesReducer from './servicesReducer';


// import placesReducer from './places';

export default combineReducers({
 auth: authReducer,
 services:servicesReducer,
 cartItems:cartReducer

  // places: placesReducer
});
