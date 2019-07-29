import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, id }) => {
  return (
    <div className='collection-preview' key={`collection-preview-${id}`}>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ ...itemProps }) => (
            <CollectionItem {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
