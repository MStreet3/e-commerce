import React from 'react';
import './directory-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';

const DirectoryMenu = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={`item-${id}`} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = ({ directory: { sections } }) => ({ sections });
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectoryMenu);
