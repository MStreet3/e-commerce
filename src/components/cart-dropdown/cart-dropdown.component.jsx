import React from 'react';
import FormButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartDropDown } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, itemCount, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {itemCount > 0 ? (
          Object.keys(cartItems).map(key => {
            if (!['itemCount', 'cartTotal'].includes(key)) {
              return <CartItem key={`cart-item${key}`} {...cartItems[key]} />;
            }
            return null;
          })
        ) : (
          <span className='empty-message'>Your cart is empty.</span>
        )}
      </div>
      <FormButton
        onClick={() => {
          history.push('/cart');
          dispatch(toggleCartDropDown());
        }}
      >
        GO TO CHECKOUT
      </FormButton>
    </div>
  );
};

const mapStateToProps = ({
  cart: { cartItems },
  cart: {
    cartItems: { itemCount }
  }
}) => ({
  cartItems,
  itemCount
});
const mapDispatchToProps = null;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdown)
);
