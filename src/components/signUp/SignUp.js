import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center'>
            
            <div class="login-div">
  
  <div class="title">Register First</div>
  
  <div class="fields">
    <div class="username"><input type="text" class="user-input" placeholder="name" /></div>
    <div class="username"><input type="text" class="user-input" placeholder="image url" /></div>
    <div class="username"><input type="email" class="user-input" placeholder="email" /></div>
    <div class="password"><input type="password" class="pass-input" placeholder="password" /></div>
  </div>
  <button class="signin-button">Register</button>
  <div class="link">
    <a href="#">Already have an account? </a> <br /> <a href="#">Log In</a>
  </div>
</div>
            
        </div>
    );
};

export default SignUp;