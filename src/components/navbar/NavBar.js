import React from 'react';
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <div className='nav shadow mb-10'>
          <div className="navbar rounded-2xl bg-base-100">
              <div className="navbar-start">


                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>


                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  
                  
                    <div className='nav-btn'><li><button>button-1</button></li></div>
                    <div className='nav-btn'><li><button>button-2</button></li></div>
                    <div className='nav-btn'><li><button>button-3</button></li></div>
                    



                  </ul>


                </div>


                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>


              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal p-0">
                    <div className='nav-btn'><li><button>button-1</button></li></div>
                    <div className='nav-btn'><li><button>button-2</button></li></div>
                    <div className='nav-btn'><li><button>button-3</button></li></div>
                  
                </ul>
              </div>
              <div className="navbar-end">
                <a className="btn">Get started</a>
              </div>
          </div>
      </div>
            
        </div>
    );
};

export default NavBar;