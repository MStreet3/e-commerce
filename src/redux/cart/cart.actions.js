import cartActionTypes from './cart.actionTypes';

export const addItemToCart = item => {
  return {
    type: cartActionTypes.APPEND_CART_ITEM,
    data: item
  };
};

export const deleteItemFromCart = item => {
  return {
    type: cartActionTypes.DELETE_CART_ITEM,
    data: item
  };
};
export const clearItemFromCart = item => {
  return {
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    data: item
  };
};

export const toggleCartDropDown = () => ({
  type: cartActionTypes.HOVERING_CART_ICON
});
