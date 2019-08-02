import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

const mapStateToProps = ({ directory: { collections, keyedCollections } }) => ({
  collections,
  keyedCollections
});
const mapDispatchToProps = null;

const CollectionOverview = ({ collections, isPreview }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherProps }) => {
        return (
          <CollectionPreview key={id} isPreview={isPreview} {...otherProps} />
        );
      })}
    </div>
  );
};

const ShopPage = ({ collections, keyedCollections, match }) => {
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <CollectionOverview collections={collections} isPreview={true} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionTitle`}
        render={({
          match: {
            params: { collectionTitle }
          }
        }) => {
          return (
            <CollectionPreview
              {...keyedCollections[collectionTitle.toLowerCase()]}
            />
          );
        }}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
