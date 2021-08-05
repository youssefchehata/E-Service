import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from './reducers';

initalStore={
  // auth:"test"
 }
 
 const middleware = [thunk];
 
 let composeEnhancers = compose;
 
 if (__DEV__) {
   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 }
 
 export const configureStore =  createStore(
     rootReducer,initalStore,
    
     composeEnhancers(applyMiddleware(...middleware)),
   
   );
   



