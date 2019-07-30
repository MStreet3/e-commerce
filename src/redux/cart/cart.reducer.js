import cartActionTypes from './cart.actionTypes';

const INITIAL_STATE = {
  cartItems: [
    {
      id: 1,
      name: 'Brown Brim',
      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
      price: 25,
      count: 1
    }
  ],
  isHoveringCartIcon: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.APPEND_CART_ITEM:
      function addItemToCart(state, payload) {
        let newState = { ...state };
        let loc = state.cartItems.find(item => item.id === payload);
        if (loc > -1) {
          let arr = [
            ...state.cartItems.slice(0, loc),
            { ...state.cartItems[loc], count: state.cartItems[loc].count++ },
            ...state.cartItems.slice(
              Math.min(loc + 1, state.cartItems.length),
              state.cartItems.length
            )
          ];
          newState = {
            ...state,
            cartItems: arr
          };
        }
        return newState;
      }
      return addItemToCart(state, action.payload);

    case cartActionTypes.DELETE_CART_ITEM:
      function deleteItemFromCart(state, payload) {
        let newState = { ...state };
        let loc = state.cartItems.find(item => item.id === payload);
        if (loc > -1) {
          let arr = [
            ...state.cartItems.slice(0, loc),
            { ...state.cartItems[loc], count: state.cartItems[loc].count-- },
            ...state.cartItems.slice(
              Math.min(loc + 1, state.cartItems.length),
              state.cartItems.length
            )
          ];
          newState = {
            ...state,
            cartItems: arr
          };
        }
        return newState;
      }
      return deleteItemFromCart(state, action.payload);
    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      function clearItemFromCart(state, payload) {
        let newState = { ...state };
        let loc = state.cartItems.find(item => item.id === payload);
        if (loc > -1) {
          let arr = state.cartItems.filter(item => item.id === payload);
          newState = {
            ...state,
            cartItems: arr
          };
        }
        return newState;
      }
      return clearItemFromCart(state, action.payload);
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
