import {CART_ADD_ITEM, CART_ITEMS} from '../actions/actionTypes';

const INITIAL_STATE = {
  cartItems: [],
  // basketList: [],
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
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_ITEMS:
      return {
        cartItems: action.payload,
      };
    default:
      return state;
  }
};
