import React from 'react';
import FormButton from '../form-button/form-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, itemCount }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {itemCount > 0
          ? Object.keys(cartItems).map(key => {
              if (key !== 'itemCount') {
                return <CartItem key={`cart-item${key}`} {...cartItems[key]} />;
              }
              return null;
            })
          : null}
      </div>
      <FormButton>GO TO CHECKOUT</FormButton>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDropdown);
