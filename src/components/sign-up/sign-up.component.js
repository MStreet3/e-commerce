import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {
      email,
      password,
      confirmPassword,
      firstName,
      lastName
    } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords must match.');
      return;
    }

    const displayName = `${firstName}${lastName ? ` ${lastName}` : ''}`;

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      this.setState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: ''
      });
    } catch (error) {}
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className='sign-up'>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            type='text'
            name='firstName'
            label='First Name'
            value={this.state.firstName}
            required
          />
          <FormInput
            onChange={this.handleChange}
            type='text'
            label='Last Name'
            name='lastName'
            value={this.state.lastName}
          />
          <FormInput
            onChange={this.handleChange}
            type='email'
            label='Email'
            name='email'
            value={this.state.email}
            required
          />
          <FormInput
            onChange={this.handleChange}
            type='password'
            label='Password'
            name='password'
            value={this.state.password}
            required
          />
          <FormInput
            onChange={this.handleChange}
            type='password'
            label='Confirm Password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            required
          />
          <FormButton type='submit'>Sign Up</FormButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
