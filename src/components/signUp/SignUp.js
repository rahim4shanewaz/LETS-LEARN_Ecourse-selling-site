import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextApi';
import './SignUp.css'
import { BeakerIcon } from '@heroicons/react/24/solid'

const SignUp = () => {

  const {createUser, signInWithGoogle, signInWithGit} = useContext(AuthContext);
  const navigate =useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/';



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
      navigate(from, {replace: true});


    })
    .catch(error => {
      console.error(error);
    })
  }
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result => {
        const user = result.user;
        navigate(from, {replace: true});
        console.log(user)
        
    })
    .catch( error => {
        console.error(error);
    })

}



const handleGitHubSignIn = () =>{
  signInWithGit()
  .then(result => {
    const user = result.user;
    navigate(from, {replace: true});
    console.log(user)
    
  })
  .catch( error => {
    console.error(error);
})


}
    return (
        <div className='flex flex-col items-center'>
            
            <div className="login-div">
  
  <div className="title">Register First</div>
  
 <form onSubmit={HandleSubmit}>
 <div className="fields">
    <div className="username"><input name= 'name' type="text" className="user-input" placeholder="name"  /></div>
    <div className="username"><input name= 'imgUrl' type="text" className="user-input" placeholder="image url" /></div>
    <div className="username"><input  name= 'email'type="email" className="user-input" placeholder="email" /></div>
    <div className="password"><input name= 'password' type="password" className="pass-input" placeholder="password" /></div>
  </div>
  <button className="signin-button mb-5">Register</button>
 </form>
 <div>
  <h1 className='text-center text-xl mb-3'>SignUp with </h1>
 <div>
 <button onClick={handleGoogleSignIn} className="mb-5 signin-button">Log In With Google</button>
 <button onClick={handleGitHubSignIn} className="signin-button">Log In With GitHub</button>
 </div>
 </div>
  
  
  
  <div className="link">
    <Link to={'/login'} className="label-text-alt link link-hover">Already have an Account, Log in?</Link>
  
  </div>
</div>
            
        </div>
    );
};

export default SignUp;