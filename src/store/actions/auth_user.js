import * as T from './actionTypes';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const signin = (username, password) => async dispatch => {
  try {
    // await AsyncStorage.setItem('token', 'res.data.token');

    dispatch({type: T.LOGIN_SUCCESS});
  } catch (error) {
    const alert = Alert.alert('Error', 'check your email/password', [
      {text: 'Okay'},
    ]);
  }
};

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

export const signout = () => async dispatch => {
  // await AsyncStorage.removeItem('token');
  // dispatch({type: SIGNOUT_USER});
  // dispatch(await clearCurrentClientType());
  // await AsyncStorage.removeItem('cache/api/secured/commercial/client');
  // navigate('Login');
};

export const signupUser = (username, password) => async dispatch => {
  try {
    dispatch({type: T.SIGNUP});
  } catch (error) {
    dispatch({type: T.ADD_ERROR, payload: 'Invalid register'});
  }
};
