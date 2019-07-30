import React from 'react';
import './cart-table.styles.scss';
import { connect } from 'react-redux';
import CartRow from '../cart-row/cart-row.component';

class CartTable extends React.Component {
  render() {
    const { cartItems } = this.props;
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
          {cartItems.map(({ id, ...otherProps }) => {
            return <CartRow key={`item-${id}`} id={id} {...otherProps} />;
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    cartItems: cart.cartItems
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartTable);
