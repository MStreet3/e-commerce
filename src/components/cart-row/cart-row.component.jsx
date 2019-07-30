import React from 'react';
import './cart-row.styles.scss';
import { connect } from 'react-redux';
import {
  addItemToCart,
  deleteItemFromCart,
  clearItemFromCart
} from '../../redux/cart/cart.actions';

class CartRow extends React.Component {
  handleClick = e => {
    e.preventDefault();
    const { id } = this.props;
    switch (e.target.name) {
      case 'decrement':
        return this.props.deleteItemFromCart({ id });
      case 'increment':
        return this.props.addItemToCart({ id });
      case 'remove':
        return this.props.clearItemFromCart({ id });
      default:
        return;
    }
  };
  render() {
    const { name, price, imageUrl, count } = this.props;
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
          <span
            className='item-decrease'
            onClick={this.handleClick}
            name='decrement'
          >
            -
          </span>
          <span className='item-quantity'>{count}</span>
          <span
            onClick={this.handleClick}
            className='item-increase'
            name='increment'
          >
            +
          </span>
        </td>
        <td className='cart-row-cell'>
          <span className='item-price'>{price}</span>
        </td>
        <td className='cart-row-cell'>
          <span
            onClick={this.handleClick}
            name='remove'
            className='remove-item'
          >
            X
          </span>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: ({ id }) => dispatch(addItemToCart(id)),
    deleteItemFromCart: ({ id }) => dispatch(deleteItemFromCart(id)),
    clearItemFromCart: ({ id }) => dispatch(clearItemFromCart(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartRow);
