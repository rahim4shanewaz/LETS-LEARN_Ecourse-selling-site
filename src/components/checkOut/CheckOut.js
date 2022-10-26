import React from 'react';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className='flex gap-5 justify-center items-center'>
            
            <div class="login-div1">
  
                <div class="title">Register First</div>
                
                <div class="fields1">
                    <div class="username">
                        
                        <input type="text" class="user-input" placeholder="name" />
                        </div>
                    <div class="username"><input type="text" class="user-input" placeholder="image url" /></div>
                    <div class="username"><input type="email" class="user-input" placeholder="email" /></div>
                    <div class="password"><input type="password" class="pass-input" placeholder="password" /></div>
                </div>
                <button class="signin-button">Register</button>
                <div class="link">
                    <a href="#">Already have an account? </a> <br /> <a href="#">Log In</a>
                </div>
             </div>



             
             <div class="login-div1">
  
                <div class="title">Register First</div>
                
                <div class="fields1">
                <p>Enter your present address</p>
                    <div class="username"><input type="text" class="user-input" placeholder="Present address" /></div>
                    <p>Enter your Full name</p>
                    <div class="username"><input type="text" class="user-input" placeholder="Full name" /></div>
                    <p>Enter your Mobile number</p>
                    <div class="username"><input type="text" class="user-input" placeholder="mobile number" /></div>
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

export default CheckOut;