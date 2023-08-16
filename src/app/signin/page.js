import React from 'react';
import GoogleButton from '../Components/GoogleButton';
import SignInForm from '../Components/SignInForm';

const SignIn = () => {
  return (
    <div className="grid auto-cols-auto gap-6">
      <h1>Sign In page</h1>
      <GoogleButton />
      <span>or</span>
      <SignInForm />
    </div>
  );
};

export default SignIn;
