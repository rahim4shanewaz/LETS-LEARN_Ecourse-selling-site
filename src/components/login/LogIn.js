import React from 'react';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='flex flex-col items-center'>
            
            <div class="login-div">
  
  <div class="title">Please Log In</div>
  
  <div class="fields">
    <div class="username"><input type="username" class="user-input" placeholder="email" /></div>
    <div class="password"><input type="password" class="pass-input" placeholder="password" /></div>
  </div>
  <button class="signin-button">Login</button>
  <div class="link">
    <a href="#">Create a new account</a> <br /> <a href="#">Sign up</a>
  </div>
</div>
            
        </div>
    );
};

export default LogIn;