import {CART_ADD_ITEM, CART_ITEMS} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';

export const addToBasket = (data, callback) => async (dispatch, getState) => {
  try {
    dispatch({type: CART_ADD_ITEM, payload: data});
    callback;
    //after dispatch will save in store
    await AsyncStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems),
    );
  } catch (error) {
    alert(error);
    dispatch({type: 'err addToBasket'});
  }
};

export const getBasket = () => async dispatch => {
  try {
    const storedCache = await AsyncStorage.getItem('cartItems');
    const GetStoredCache = await JSON.parse(storedCache);
    if (!GetStoredCache) return null;
    dispatch({type: CART_ITEMS, payload: GetStoredCache});
    //will get in Acceuil and basket view
  } catch (error) {
    alert(error);
    dispatch({type: 'err getBasket'});
  }
};
