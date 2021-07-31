import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import ordersReducers from './ordersReducers';
import servicesReducer from './servicesReducer';

// import placesReducer from './places';

export default combineReducers({
  auth: authReducer,
  services: servicesReducer,
  cart: cartReducer,
  orders: ordersReducers,

  // places: placesReducer
});
