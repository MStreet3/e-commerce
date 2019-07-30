import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.log('Error signing in.', error);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    return this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='email'
            label='Email'
            value={this.state.email}
            required
            onChange={this.handleChange}
          />

          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <div className='buttons'>
            <FormButton type='submit'>Sign In</FormButton>
            <FormButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </FormButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
