import React from 'react';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='w-full flex justify-center'>
        <div className=' w-2/4 h-72 m-14 bxShadow flex flex-col justify-center items-center  rounded-3xl'>
         <h1 className='text-6xl font-bold text-red-600'> 404 </h1>
         <h1 className='text-3xl'>Opps !!</h1>
         <h1 className='text-2xl'>This Page Not Found</h1>

        </div>
     </div>
    );
};

export default NotFoundPage;