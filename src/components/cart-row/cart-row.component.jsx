import React from 'react';
import './cart-row.styles.scss';

export const CartRow = ({ item }) => {
  const { name, price, imageUrl, count } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{count}</span>
      <span className='price'>{price}</span>
      <span className='remove-button'>&#10005;</span>
    </div>
  );
};
