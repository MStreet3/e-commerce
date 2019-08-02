import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, id, isPreview }) => {
  if (isPreview) items = items.filter((item, index) => index < 4);
  return (
    <div
      className={`${isPreview ? 'collection-preview' : 'collection-page'}`}
      key={`collection-preview-${id}`}
    >
      <h1 className='title'>{title}</h1>
      <div className={`${isPreview ? 'preview' : 'items'}`}>
        {items.map(item => (
          <CollectionItem key={`collection-item-${item.id}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
