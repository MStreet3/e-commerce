import cartActionTypes from './cart.actionTypes';

export const addItemToCart = ({ id }, ...otherProps) => {
  return (dispatch, getState) => {
    const { cartItems } = getState().cart;
    let newCartItems = {};

    if (cartItems[id]) {
      let prevCount = cartItems[id].count;
      newCartItems = {
        ...cartItems,
        [id]: {
          ...otherProps,
          count: prevCount++
        }
      };
    } else {
      newCartItems = {
        ...cartItems,
        [id]: {
          ...otherProps,
          count: 1
        }
      };
    }
    return dispatch({
      type: cartActionTypes.APPEND_CART_ITEM,
      data: newCartItems
    });
  };
};

export const deleteItemFromCart = ({ id }, ...otherProps) => {
  return (dispatch, getState) => {
    const { cartItems } = getState().cart;
    let newCartItems = {};

    if (cartItems[id]) {
      let prevCount = cartItems[id].count;

      if (prevCount > 1) {
        newCartItems = {
          ...cartItems,
          [id]: {
            ...otherProps,
            count: prevCount--
          }
        };
      } else if (prevCount === 1) {
        newCartItems = {
          ...cartItems
        };
        delete newCartItems[id];
      }
    } else {
      newCartItems = { ...cartItems };
    }
    return dispatch({
      type: cartActionTypes.DELETE_CART_ITEM,
      data: newCartItems
    });
  };
};

export const clearItemFromCart = ({ id }) => {
  return (dispatch, getState) => {
    const { cartItems } = getState().cart;
    let newCartItems = { ...cartItems };
    if (newCartItems[id]) {
      delete newCartItems[id];
    }
    return dispatch({
      type: cartActionTypes.CLEAR_ITEM_FROM_CART,
      data: newCartItems
    });
  };
};

export const setCartHoverState = () => ({
  type: cartActionTypes.HOVERING_CART_ICON
});
