import React from 'react';
import './cart-row.styles.scss';
import {
  clearItemFromCart,
  addItemToCart,
  deleteItemFromCart
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartRow = ({
  item,
  removeItemFromCart,
  addItemToCart,
  deleteItemFromCart
}) => {
  const { name, price, imageUrl, count } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => deleteItemFromCart(item)}>
          &#10094;
        </div>
        <span className='value'>{count}</span>
        <div onClick={() => addItemToCart(item)} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span onClick={() => removeItemFromCart(item)} className='remove-button'>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    deleteItemFromCart: item => dispatch(deleteItemFromCart(item))
  };
};

const mapStateToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartRow);
