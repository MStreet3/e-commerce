import React from 'react';
import './cartpage.styles.scss';
import { connect } from 'react-redux';
import CartRow from '../../components/cart-row/cart-row.component';

const Cart = ({ cartItems }) => {
  const { itemCount, cartTotal, ...myItems } = cartItems;
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {Object.keys(myItems).map(id => {
        return <CartRow key={`cart-item${id}`} item={myItems[id]} />;
      })}
      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems
  };
};
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
