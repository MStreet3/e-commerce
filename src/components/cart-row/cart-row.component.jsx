import React from 'react';
import './cart-row.styles.scss';
import { connect } from 'react-redux';
import {
  addItemToCart,
  deleteItemFromCart,
  clearItemFromCart
} from '../../redux/cart/cart.actions';

const CartRow = ({
  item,
  addItemToCart,
  deleteItemFromCart,
  clearItemFromCart
}) => {
  const { name, price, imageUrl, count } = item;
  return (
    <tr className='cart-row'>
      <td className='cart-row-cell'>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
      </td>
      <td className='cart-row-cell'>
        <span className='item-description'>{name}</span>
      </td>
      <td className='cart-row-cell'>
        <input
          type='submit'
          className='item-decrease'
          onClick={() => deleteItemFromCart(item)}
          name='decrement'
          value='-1'
        />
        <span className='item-quantity'>{count}</span>
        <input
          type='submit'
          onClick={() => addItemToCart(item)}
          className='item-increase'
          name='increment'
          value='+1'
        />
      </td>
      <td className='cart-row-cell'>
        <span className='item-price'>{price}</span>
      </td>
      <td className='cart-row-cell'>
        <span
          onClick={() => clearItemFromCart(item)}
          name='remove'
          className='remove-item'
        >
          X
        </span>
      </td>
    </tr>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
    deleteItemFromCart: item => dispatch(deleteItemFromCart(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartRow);
