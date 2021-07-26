import { CART_ADD_ITEM } from "./actionTypes";


export const addToBasket = (data) => async dispatch => {
    try {
      dispatch({type: CART_ADD_ITEM, payload:data});
      //NVIGATION
    } catch (error) {
      alert(error);
      dispatch({type: 'err qte'});
    }
  };