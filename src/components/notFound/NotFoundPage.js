import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='w-full flex justify-center'>
        <div className=' w-2/4 h-72 m-14 bxShadow flex flex-col justify-center items-center  rounded-3xl'>
         <h1 className='text-6xl font-bold text-red-600'> 404 </h1>
         <h1 className='text-3xl'>Opps !!</h1>
         <h1 className='text-2xl'>This Page Not Found</h1>
         <div className='m-5'>
         <NavLink className={'hover:bg-white hover:text-black'} to='/'><button>Go Back to our website</button></NavLink>
         </div>

        </div>
     </div>
    );
};

export default NotFoundPage;