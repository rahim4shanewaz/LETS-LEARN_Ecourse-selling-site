import React from 'react';
import './NavBar.css'
import { BeakerIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    return (
        <div >
         


            <div className='nav w-full  nav-bg shadow  '>
          <div className="navbar nav-bg rounded-2xl bg-base-100">
              <div className="navbar-start">


                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>


                  <ul tabIndex={0} className=" text-center nav-bg menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52">
                  
                    <div className='flex flex-col items-center'>
                    <div className='img-box mb-3'></div>
                    <div className='sign-btn m-2'><button className=''>Sign In</button></div>
                    <div className='sign-btn m-2'><button className=''>Sign Up</button></div>
                    <div className='sign-btn m-2'><button className=''>Log Out</button></div>
                    </div>


                    <div className='nav-btn mb-3'><li><button className='mt-3'>button-1</button></li></div>
                    <div className='nav-btn mb-3'><li><button className='mt-3'>button-2</button></li></div>
                    <div className='nav-btn mb-3'><li><button className='mt-3'>button-3</button></li></div>
                    <div className='nav-btn mb-3'><li><button className='mt-3'>button-4</button></li></div>
             
                  </ul>
                  


                </div>


                    <div className='h-full w-50 px-2 p-3 border-gray-400 text-slate-400 '>  <p className='text-3xl font-bold'>Let's Learn</p>
                    <hr/></div>


              </div>
              <div className="navbar-center hidden lg:flex ">
                <ul className=" menu-horizontal p-0">
                    <div className='nav-btn m-2 '><li><button className='p-3'>button-1 </button></li></div>
                    <div className='nav-btn m-2'><li><button className='p-3'>button-2</button></li></div>
                    <div className='nav-btn m-2'><li><button className='p-3'>button-3</button></li></div>
                    <div className='nav-btn m-2'><li><button className='p-3'>button-4</button></li></div>
                  
                </ul>
              </div>
              <div className="navbar-end hidden lg:flex text-center ">
              <div className='sign-btn m-2'><button className=''>Sign In</button></div>
              <div className='sign-btn m-2'><button className=''>Sign Up</button></div>
              <div className='sign-btn m-2'><button className=''>Log Out</button></div>
              <div className='img-box'></div>
              </div>
          </div>
            </div>
            
        </div>
    );
};

export default NavBar;