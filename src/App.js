import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import RegistrationPage from './pages/registration/registration.component';
import CartPage from './pages/cart/cartpage.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.unsubscribeFromAuth = null;
  }

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/hats' component={HatsPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/cart' component={CartPage} />
          <Route
            exact
            path='/sign-in'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <RegistrationPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
