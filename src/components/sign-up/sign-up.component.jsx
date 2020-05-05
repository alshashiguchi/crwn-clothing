import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.action';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [ userCredentials, setUserCredentials ]  = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return
    }    
    signUpStart({ displayName, email, password });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }
     
  return(
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your e-mail and password</span>
      <form className='sign-up-form' onSubmit={ handleSubmit }>
        <FormInput 
          type='text'
          name='displayName'
          value={ displayName }
          onChange={handleChange}
          label='Display name'
          required/>
        
        <FormInput 
          type='email'
          name='email'
          value={ email }
          onChange={handleChange}
          label='E-mail'
          required/>
        <FormInput 
          type='password'
          name='password'
          value={ password }
          onChange={handleChange}
          label='Password'
          required/>
        <FormInput 
          type='password'
          name='confirmPassword'
          value={ confirmPassword }
          onChange={handleChange}
          label='ConfirmPassword'
          required/>
        
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )      
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);