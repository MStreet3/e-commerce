import cartActionTypes from './cart.actionTypes';
import {
  addItemToCart,
  deleteItemFromCart,
  clearItemFromCart
} from './cart.utils';

const INITIAL_STATE = {
  cartItems: { itemCount: 0 },
  isCartIconVisible: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.APPEND_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state, action.data)
      };

    case cartActionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: deleteItemFromCart(state, action.data)
      };

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state, action.data)
      };

    case cartActionTypes.HOVERING_CART_ICON:
      return {
        ...state,
        isCartIconVisible: !state.isCartIconVisible
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
