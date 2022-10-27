import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextApi';
import './LogIn.css'

const LogIn = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  

  const HandleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    
    
    const email= form.email.value;
    const password= form.password.value;
    // console.log(email,password);

    signIn(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from, {replace: true});
      
      
  })
  .catch( error => {
      console.error(error);
  })

    
  }
    return (
        <div className='flex flex-col mt-10 mb-10 items-center'>
            
            <div className="login-div">
  
  <div className="title">Please Log In</div>
  
  <form onSubmit={HandleSubmit}>
  <div className="fields">
    <div className="username"><input name='email' type="username" className="user-input" placeholder="email" required /></div>
    <div className="password"><input name= 'password' type="password" className="pass-input" placeholder="password" required /></div>
  </div>
  <button className="signin-button">Login</button>
  </form>
  <div className="link">
    <Link to={'/signup'} className="label-text-alt link link-hover">Create a new account</Link>
  </div>
</div>
            
        </div>
    );
};

export default LogIn;