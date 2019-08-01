import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';

const mapStateToProps = ({ directory: { collections } }) => ({ collections });
const mapDispatchToProps = null;

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherProps }) => {
        return <CollectionPreview key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
