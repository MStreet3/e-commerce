import React from 'react';
import './cart-table.styles.scss';
import { connect } from 'react-redux';
import CartRow from '../cart-row/cart-row.component';

const CartTable = ({ itemCount, cartItems }) => {
  return (
    <table className='cart-table'>
      <thead className='cart-table-header'>
        <tr>
          <th scope='col'>Product</th>
          <th scope='col'>Description</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Price</th>
          <th scope='col'>Remove</th>
        </tr>
      </thead>
      <tbody>
        {itemCount > 0
          ? Object.keys(cartItems).map(id => {
              return <CartRow key={`item-${id}`} item={cartItems[id]} />;
            })
          : null}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ cart: { cartItems, itemCount } }) => {
  return {
    cartItems,
    itemCount
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTable);
