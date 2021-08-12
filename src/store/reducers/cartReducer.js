import {
  CART_ADD_ITEM,
  CART_ITEMS,
  CART_REMOVE_ITEM,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
  // console.log("auth",state,action.payload);
  // return state
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.id === existItem.id ? item : x,
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [item],
        };
      }
    case CART_ITEMS:
      return {
        cartItems: action.payload,
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(el => el.id !== action.payload),
      };
    default:
      return state;
  }
};
