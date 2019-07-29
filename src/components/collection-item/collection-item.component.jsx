import React from 'react';
import './collection-item.styles.scss';
const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className='collection-item' key={`collection-item-${id}`}>
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
    </div>
  );
};

export default CollectionItem;
