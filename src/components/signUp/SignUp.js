import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Form, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/ContextApi';
import './SignUp.css'


const SignUp = () => {

  const {createUser, signInWithGoogle,updateUserprofile, signInWithGit} = useContext(AuthContext);
  const navigate =useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/';
  const [accepted, setAccepted] = useState(false); 



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
      handleUpadetUserProfile(name, imgUrl);

      navigate(from, {replace: true});


    })
    .catch(error => {
      console.error(error);
    })
  }
  const  handleUpadetUserProfile = (name, imgUrl) =>{
    const profile = {
      displayName: name,
      photoURL: imgUrl
    }
    updateUserprofile(profile)
    .then(() =>{})
    .catch(error => console.error(error));
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
});



}
const handleAccepted = event =>{
  setAccepted(event.target.checked);

}
    return (
        <div className='flex flex-col items-center'>
            
            <div className="login-div">
  
  <div className="title">Register First</div>
  
 <form onSubmit={HandleSubmit}>
 <div className="fields">
    <div className="username"><input name= 'name' type="text" className="user-input" placeholder="full name"  /></div>
    <div className="username"><input name= 'imgUrl' type="text" className="user-input" placeholder="image url" /></div>
    <div className="username"><input  name= 'email'type="email" className="user-input" placeholder="email" required /></div>
    <div className="password"><input name= 'password' type="password" className="pass-input" placeholder="password" required /></div>
  </div>

  <button className="signin-button mb-5" disabled={!accepted}>Register</button>
 </form>
            
            <div  className="form-control">
            <label className="cursor-pointer label">
            <input onClick={handleAccepted} type="checkbox"   className="checkbox checkbox-accent" />
              <span className="label-text">Accept terms and Conditions <NavLink className={ 'text-emerald-500'} to='/terms'>Terms and Conditions</NavLink></span>
             
            </label>
           </div>
            
 <div>
  <h1 className='text-center text-xl mb-3'>SignUp with </h1>
 <div>
 <button onClick={handleGoogleSignIn} className="mb-5 signin-button">Google</button>
 <button onClick={handleGitHubSignIn} className="signin-button">GitHub</button>
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