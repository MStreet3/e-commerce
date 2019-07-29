import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    return this.setState({
      email: '',
      password: ''
    });
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
          <FormButton type='submit'>Sign In</FormButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
