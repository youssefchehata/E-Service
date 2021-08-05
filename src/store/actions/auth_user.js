import * as T from './actionTypes';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Auth, database} from '../../../Setup';


export const SignUp = (email, passswod,callback)=> async dispatch =>  {
  try {
    const res = await Auth().createUserWithEmailAndPassword(email, passswod)
    console.log('res', res);
    dispatch({type: T.SIGNUP});
    callback();
  } catch (error) {
    alert(error);
    dispatch({type: 'err SIGNUP'});
  }

};
export const SignIn = (email, passswod, callback) => async dispatch => {
  try {
    const res = await Auth().signInWithEmailAndPassword(email, passswod);
    console.log('res', res);
    dispatch({type: T.LOGIN_SUCCESS});
    callback();
  } catch (error) {
    alert(error);
    dispatch({type: 'err SignIn'});
  }
};


export const SignOut = (callback) => async dispatch => {
  try {
    const user = Auth().currentUser;
    if (user) {
      await Auth().signOut()
    } 

  
    console.log('res', user);
    dispatch({type: T.SIGNOUT});
    callback();
  } catch (error) {
    alert(error);
    dispatch({type: 'err SIGNOUT'});
  }

};
// ===================================


export const AutomaticSignIn = callback => async dispatch => {
  // const token = await AsyncStorage.getItem('token');
  // if (token) {
  //   dispatch({type: LOGIN_USER_SUCCESS, payload: token});
  //   dispatch(fetchCurrentClientType());
  //   navigate('chooseClientType');
  //   //  navigate('CategoryList')
  // } else {
  //   navigate('Login');
  // }
};




