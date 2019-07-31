import React from 'react';
import FormButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartDropDown } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const { itemCount, cartTotal, ...myItems } = cartItems;
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {itemCount > 0 ? (
          Object.keys(myItems).map(key => {
            return <CartItem key={`cart-item${key}`} {...myItems[key]} />;
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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
const mapDispatchToProps = null;

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartDropdown)
);
