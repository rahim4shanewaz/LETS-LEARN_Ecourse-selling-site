import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/ContextApi';
import './SignUp.css'

const SignUp = () => {

  const {createUser, signInWithGoogle} = useContext(AuthContext);



  const HandleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl= form.imgUrl.value;
    const email= form.email.value;
    const password= form.password.value;
    console.log(name,imgUrl,email,password);

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();


    })
    .catch(error => {
      console.error(error);
    })
  }
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result => {
        const user = result.user;
        console.log(user)
        
    })
    .catch( error => {
        console.error(error);
    })

}
    return (
        <div className='flex flex-col items-center'>
            
            <div class="login-div">
  
  <div class="title">Register First</div>
  
 <form onSubmit={HandleSubmit}>
 <div class="fields">
    <div class="username"><input name= 'name' type="text" class="user-input" placeholder="name"  /></div>
    <div class="username"><input name= 'imgUrl' type="text" class="user-input" placeholder="image url" /></div>
    <div class="username"><input  name= 'email'type="email" class="user-input" placeholder="email" /></div>
    <div class="password"><input name= 'password' type="password" class="pass-input" placeholder="password" /></div>
  </div>
  <button class="signin-button mb-5">Register</button>
 </form>
 <button onClick={handleGoogleSignIn} class="signin-button">Log In With Google</button>
  
  
  
  <div class="link">
    <Link to={'/login'} className="label-text-alt link link-hover">Already have an Account, Log in?</Link>
  
  </div>
</div>
            
        </div>
    );
};

export default SignUp;