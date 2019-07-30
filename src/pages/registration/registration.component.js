import React from 'react';
import './registration.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const RegistrationPage = () => {
  return (
    <div className='registration-page'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default RegistrationPage;
