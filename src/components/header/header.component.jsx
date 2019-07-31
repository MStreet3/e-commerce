import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ itemCount, isCartIconVisible, currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT US
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/sign-in'>
            SIGN IN
          </Link>
        )}
        <CartIcon>{itemCount}</CartIcon>
      </div>
      {isCartIconVisible ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { isCartIconVisible }
}) => ({
  currentUser,
  isCartIconVisible
});

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
