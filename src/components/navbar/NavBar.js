import React, { useContext, useState } from 'react';
import './NavBar.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHouse } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/ContextApi';

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)

  const [accepted, setAccepted] = useState(false); 

  const handleAccepted = event =>{
    setAccepted(event.target.checked);
  
  }
  // console.log(user)

const handleLogout = () => {
  logOut()
    .then(() =>{})
    .catch( error => console.error(error));
}





    return (
        <div className='mb-5'>
         


            
          <div className=" w-full text-white px-5 flex  bg-black">



              <div className="">


                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>


                  <ul tabIndex={0} className=" text-center bg-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                  
                    <div className='flex flex-col justify-center items-center '>

                 <div>
                          { user?.uid &&
                          <div className='img-box' title={user.email}>
                          { <span><img className='w-100 h-100' src={user.photoURL} alt="" /> </span> }
                          </div>
                          }
                 </div>



                  <div>
                          { user?.uid ?
                          <div className=' mb-10 flex justify-center items-center'><button onClick={handleLogout} className=''>Log Out</button></div> :


                          <div className='mb-10'>
                          <div className=' m-2 flex justify-center items-center'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/login'><button className=''>Sign In</button></NavLink></div>
                          <div className=' m-2 flex justify-center items-center'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/signup'><button className=''>Register</button></NavLink></div>
                          </div>
                          }
                    
                  </div>



                    </div>


              <div className='mb-3' ><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/courses' ><button className=''>Courses</button></NavLink></div>

              <div className='mb-3' ><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/blog' ><button className=''>Blog</button></NavLink></div>


              <div className='mb-3'><NavLink className={({isActive}) => isActive ? "active1" : "not-active"} to='/home' ><button className=''><FontAwesomeIcon className='text-2xl' icon={faHouse}></FontAwesomeIcon></button></NavLink></div>



              <div className='mb-3' ><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/faq' ><button className=''>FAQ</button></NavLink></div>

              <div className='mb-3' ><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/aboutus' ><button className=''>About Us</button></NavLink></div>
             
                  </ul>
                  


                </div>

                    {/* <div className='logo w-50 px-2 p-3 '>  <p className='text-3xl font-bold'>Let's Learn</p>
                    </div> */}
              </div>


              <div className='flex w-full items-center justify-between'>


              <div className="hidden lg:flex ">


                <div className="flex gap-3">
                  
                    <div className='menu-btn py-2 w-16 flex justify-center items-center text-sm '  ><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/courses' ><button className=''>Courses</button></NavLink></div>

                    <div className='menu-btn py-2  w-16 flex justify-center items-center text-sm '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/blog' ><button className=''>Blog</button></NavLink></div>


                    <div className='menu-btn py-2  w-16 flex justify-center '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/home' ><button className=''><FontAwesomeIcon className='text-2xl' icon={faHouse}></FontAwesomeIcon></button></NavLink></div>

                   

                    <div className='menu-btn py-2  w-16 flex justify-center items-center text-sm '><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/faq' ><button className=''>FAQ</button></NavLink></div>

                    <div className='menu-btn py-2 flex items-center text-sm  ' ><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/aboutus' ><button className=''>About Us</button></NavLink></div>



                   


                </div>
              </div>



              <div className='border p-1 border-white'>
              <div className='bg-white text-black font-xl font-bold p-1 hover:'>
                <h1>L||L</h1>
              </div>
              </div>


              
              <div className="hidden lg:flex text-center gap-3 justify-center items-center ">
              <small className='mr-14'> 
                  <div onClick={handleAccepted} className='flex gap-3 justify-center items-center' >
                  { accepted ? <p className='text-white'>Dark</p> : <p className='text-white'>Light</p> 

                  }
                        <input type="checkbox" className="toggle w-10 h-4" />
                  </div>
                  </small>
                 
                

            <div>
            { user?.uid ?
                <div className='menu-btn py-2  w-16 flex items-center text-sm'><button onClick={handleLogout} className=''>Log Out</button></div> :


                <div className='flex'>
                <div className='menu-btn py-2  w-16 flex items-center text-sm'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/login'><button className=''>Sign In</button></NavLink></div>


                <div className='menu-btn py-2  w-16 flex items-center text-sm'><NavLink className={({isActive}) => isActive ? "active" : "not-active"} to='/signup'><button className=''>Register</button></NavLink></div>
                </div>
              }
            </div>

              <div>
              { user?.uid &&
                <div className='img-box' title={user.displayName}>
                { <span><img className='w-100 h-100' src={user.photoURL} alt="" /> </span> }
                </div>
              }
              </div>
              </div>


              </div>




          </div>
            </div>
            
            
       
    );
};

export default NavBar;