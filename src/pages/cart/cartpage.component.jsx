import React from 'react';
import './cartpage.styles.scss';
import CartTable from '../../components/cart-table/cart-table.component';

class Cart extends React.Component {
  render() {
    return (
      <div className='cart-page'>
        <h2>Shopping Cart</h2>
        <CartTable />
      </div>
    );
  }
}

export default Cart;
