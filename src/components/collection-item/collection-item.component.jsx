import React from 'react';
import FormButton from '../form-button/form-button.component';
import { connect } from 'react-redux';
import './collection-item.styles.scss';
import { addItemToCart } from '../../redux/cart/cart.actions';

const CollectionItem = props => {
  const { name, imageUrl, price } = props.item;
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <FormButton onClick={() => props.addItemToCart(props.item)} inverted>
        Add to Cart
      </FormButton>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
