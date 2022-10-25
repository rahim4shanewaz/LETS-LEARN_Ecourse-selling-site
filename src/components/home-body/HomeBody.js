import React from 'react';
import './HomeBody.css'

const HomeBody = () => {
    return (
        <div> 
            <div className='sm:hidden md:flex  lg:flex  gap-10 justify-center items-center mx-5 '>
            <div class="container1">
                <div class="card1">

                    <div class="slide slide1">

                        <div class="content">

                            <div class="icon">

                                <i class="fa fa-user-circle" aria-hidden="true"></i>

                            </div>

                        </div>

                    </div>

                    <div class="slide slide2">

                        <div class="content">

                            <h3>

                                Hello there!

                            </h3>

                            <p>Trust yourself and keep going.</p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="container1">
                <div class="card1">

                    <div class="slide slide1">

                        <div class="content">

                            <div class="icon">

                                <i class="fa fa-user-circle" aria-hidden="true"></i>

                            </div>

                        </div>

                    </div>

                    <div class="slide slide2">

                        <div class="content">

                            <h3>

                                Hello there!

                            </h3>

                            <p>Trust yourself and keep going.</p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="container1">
                <div class="card1">

                    <div class="slide slide1">

                        <div class="content">

                            <div class="icon">

                                <i class="fa fa-user-circle" aria-hidden="true"></i>

                            </div>

                        </div>

                    </div>

                    <div class="slide slide2">

                        <div class="content">

                            <h3>

                                Hello there!

                            </h3>

                            <p>Trust yourself and keep going.</p>

                        </div>

                    </div>

                </div>
            </div>
            </div>








            <div className='home-body-content mx-5'>
                <div className='grid  sm:grid-cols-1 lg:grid-cols-2 gap-3 p-10'>
                    <div className=' w-50 h-full p-10'>
                        <h1 className='text-3xl mb-6 text-color text-black font-black'>The Prodigious eLearning Courses for you</h1>
                      
                      
                       <div className='text-color' >
                       <h2 className='text-xl text-color font-black mb-6'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua.</h2>
                        <h3 className='mb-4 '>Lorem ipsum dolor, sit amet consectetur adipisicing bramet consectetur adipisicing <br />amet consectetur adipisicing</h3>
                        <h3 className='mb-4' >Lorem ipsum dolor, sit amet consectetur adipisicing <br />amet consectetur adipisicingamet consectetur adipisicing</h3>
                        <h3 className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing</h3>
                        
                       </div>

                    </div>
                    <div className=' grid grid-cols-2 w-50 h-full text-white gap-5'>
                        <div className='h-75 pt-10 rounded '>
                            
                            <div className='h-full box-shadow rounded-lg'>
                            <img  className='h-full  object-cover rounded-lg' src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="" />
                            </div>
                        </div>
                        <div className=' pb-10'>
                        <div className='h-full box-shadow rounded-lg'>
                        <img className='h-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80" alt="" />
                        </div>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default HomeBody;