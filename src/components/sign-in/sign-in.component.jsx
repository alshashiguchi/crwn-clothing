import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component {
  
  constructor(props) {
    super(props);

    this.state ={
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  onHandleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            value={ this.state.email } 
            onChange={this.onHandleChange}
            label='email'
            required />          
          <FormInput 
            name="password" 
            value={ this.state.password }
            onChange={this.onHandleChange}
            label="password"
            required />          

          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;
