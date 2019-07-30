import cartActionTypes from './cart.actionTypes';

export const addItemToCart = ({ id }) => {
  return {
    type: cartActionTypes.APPEND_CART_ITEM,
    payload: id
  };
};

export const deleteItemFromCart = ({ id }) => {
  return {
    type: cartActionTypes.DELETE_CART_ITEM,
    payload: id
  };
};

export const clearItemFromCart = ({ id }) => {
  return {
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: id
  };
};

export const setCartHoverState = () => ({
  type: cartActionTypes.HOVERING_CART_ICON
});
