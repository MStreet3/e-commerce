import cartActionTypes from './cart.actionTypes';

const INITIAL_STATE = {
  cartItems: {},
  isHoveringCartIcon: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.APPEND_CART_ITEM:
      return {
        ...state,
        cartItems: action.data
      };

    case cartActionTypes.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: action.data
      };

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: action.data
      };

    case cartActionTypes.HOVERING_CART_ICON:
      return {
        ...state,
        isHoveringCartIcon: !state.isHoveringCartIcon
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
