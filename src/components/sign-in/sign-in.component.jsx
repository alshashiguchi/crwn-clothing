import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});
  
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    
    emailSignInStart(email, password);
  }

  const onHandleChange = event => {
    const { value, name } = event.target;
    
    setCredentials({ ...userCredentials, [name]: value });
  }
  
  return(
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
     <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email"
          value={ email } 
          onChange={onHandleChange}
          label='email'
          required />          
        <FormInput 
          name="password" 
          type="password"
          value={ password }
          onChange={onHandleChange}
          label="password"
          required />          
       <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn> 
            {''}
            Sign in with Google{' '}
         
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )  
}

const mapDispatchToProps = (dispatch) =>  ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
