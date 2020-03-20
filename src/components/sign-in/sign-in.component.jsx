import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';

class SignIn extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  onHandleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value });
  }

  render() {
    return(
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email"
            value={ this.state.email } 
            onChange={this.onHandleChange}
            label='email'
            required />          
          <FormInput 
            name="password" 
            type="password"
            value={ this.state.password }
            onChange={this.onHandleChange}
            label="password"
            required />          

          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn> 
              {''}
              Sign in with Google{' '}
           
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

export default SignIn;
