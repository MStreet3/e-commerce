import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';
import './cart-icon.styles.scss';
import { toggleCartDropDown } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({ itemCount, toggleCartDropDown }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartDropDown} />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropDown: () => dispatch(toggleCartDropDown())
});

const mapStateToProps = ({
  cart: {
    cartItems: { itemCount }
  }
}) => ({ itemCount });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
