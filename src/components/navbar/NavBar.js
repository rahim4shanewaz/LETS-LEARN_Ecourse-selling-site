import React, { useContext } from 'react';
import './NavBar.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/ContextApi';

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user)

const handleLogout = () => {
  logOut()
    .then(() =>{})
    .catch( error => console.error(error));
}





    return (
        <div >
         


            <div className='nav w-full  nav-bg shadow text-stone-800 font-bold'>
          <div className="navbar nav-bg rounded-2xl bg-base-100">
              <div className="navbar-start">


                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>


                  <ul tabIndex={0} className=" text-center nav-bg menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                  
                    <div className='flex flex-col '>
                    { user?.uid &&
                <div className='img-box' title={user.email}>
                { <span><img className='w-100 h-100' src={user.photoURL} alt="" /> </span> }
                </div>
              }



            { user?.uid ?
                <div className='sign-btn mb-10 flex justify-center items-center'><button onClick={handleLogout} className=''>Log Out</button></div> :


                <div className='mb-10'>
                <div className='sign-btn m-2 flex justify-center items-center'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/login'><button className=''>Sign In</button></NavLink></div>
                <div className='sign-btn m-2 flex justify-center items-center'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/signup'><button className=''>Register</button></NavLink></div>
                </div>
              }



                    </div>


                    <div className='nav-btn flex justify-center items-center mb-3 '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/blog' ><button className=''>Blog</button></NavLink></div>

                  <div className='nav-btn flex justify-center items-center mb-3 '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/courses' ><button className=''>Courses</button></NavLink></div>

                  <div className='img-box2 flex mx-5 mb-3 justify-center items-center '><NavLink className={({isActive}) => isActive ? "active1" : "not-active"} to='/home' ><button className=''><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></button></NavLink></div>



                  <div className='nav-btn flex justify-center items-center mb-3'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/blog' ><button className=''>Blog</button></NavLink></div>

                  <div className='nav-btn flex justify-center items-center mb-3 '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/faq' ><button className=''>FAQ</button></NavLink></div>
             
                  </ul>
                  


                </div>


                    <div className='logo h-full w-50 px-2 p-3 '>  <p className='text-3xl font-bold'>Let's Learn</p>
                    </div>


              </div>
              <div className="navbar-center hidden lg:flex ">
                <ul className=" menu-horizontal p-0">
                   

                    <div className='nav-btn flex justify-center items-center '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/courses' ><button className=''>Courses</button></NavLink></div>
                    <div className='nav-btn flex justify-center items-center '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/blog' ><button className=''>Blog</button></NavLink></div>


                    <div className='img-box2 flex mx-5 justify-center items-center '><NavLink className={({isActive}) => isActive ? "active1" : "not-active"} to='/home' ><button className=''><FontAwesomeIcon className='text-2xl' icon={faHouse}></FontAwesomeIcon></button></NavLink></div>

                   

                    <div className='nav-btn flex justify-center items-center '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/faq' ><button className=''>FAQ</button></NavLink></div>
                    <div className='nav-btn flex justify-center items-center '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/aboutus' ><button className=''>About Us</button></NavLink></div>
                    <div>

                                          {/* <div className='flex gap-3' >
                        
                                                <p className='text-white'>Light</p> 
                                                <input type="checkbox" className="toggle" />
                                                <p>Dark</p>
                       
                                          </div> */}



                      {/* <h1>{user?.uid && <span className='text-white mx-3' >welcome, {user.email}</span> }</h1> */}
                    </div>
                  
                </ul>
              </div>
              <div className="navbar-end hidden lg:flex text-center ">
                 
                <small> <div className='flex gap-3' >
                        
                        <p className='text-white'>Light</p> 
                        <input type="checkbox" className="toggle" />
                        <p>Dark</p>

                  </div></small>

              { user?.uid ?
                <div className='sign-btn m-2 flex justify-center items-center'><button onClick={handleLogout} className=''>Log Out</button></div> :


                <div className='flex'>
                <div className='sign-btn m-2 flex justify-center items-center'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/login'><button className=''>Sign In</button></NavLink></div>
                <div className='sign-btn m-2 flex justify-center items-center'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/signup'><button className=''>Register</button></NavLink></div>
                </div>
              }


              



              { user?.uid &&
                <div className='img-box' title={user.displayName}>
                { <span><img className='w-100 h-100' src={user.photoURL} alt="" /> </span> }
                </div>
              }
              </div>
          </div>
            </div>
            
        </div>
    );
};

export default NavBar;