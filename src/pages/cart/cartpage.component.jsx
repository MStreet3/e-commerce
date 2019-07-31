import React from 'react';
import './cartpage.styles.scss';
import { connect } from 'react-redux';
// import CartTable from '../../components/cart-table/cart-table.component';

const Cart = ({ itemCount, cartTotal, myItems }) => {
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
      <div className='total'>
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  const { itemCount, cartTotal, ...myItems } = cartItems;
  return {
    itemCount,
    cartTotal,
    myItems
  };
};
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
