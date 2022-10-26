import { faChalkboardTeacher, faCoffee, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

                            <div class="icon flex flex-col items-center justify-center">

                               
                                <FontAwesomeIcon className='text-5xl' icon={faGraduationCap}></FontAwesomeIcon>
                                

                            </div>

                        </div>

                    </div>

                    <div class="slide slide2">

                        <div class="content">

                            <h3>

                            <h1 className='text-2xl text-center'>Total Enrolled !</h1>

                            </h3>
                           
                            <p><span className='text-xl'>4543</span> Students  <br /> Trust yourself and keep going.</p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="container1">
                <div class="card1">

                    <div class="slide slide1">

                        <div class="content">

                            <div class="icon flex flex-col items-center justify-center">

                            <FontAwesomeIcon className='text-5xl' icon={faChalkboardTeacher}></FontAwesomeIcon>

                            </div>

                        </div>

                    </div>

                    <div class="slide slide2">

                        <div class="content">

                            <h3>

                            <h1 className='text-2xl text-center'>Total Instructor !</h1>

                            </h3>

                            <p><span className='text-xl'>84</span> Instructor  <br />Learn with us and build Career.</p>

                        </div>

                    </div>

                </div>
            </div>
            <div class="container1">
                <div class="card1">

                    <div class="slide slide1">

                        <div class="content">

                            <div class="icon flex flex-col items-center justify-center">

                            <FontAwesomeIcon className='text-5xl' icon={faStar}></FontAwesomeIcon>

                            </div>

                        </div>

                    </div>

                    <div class="slide slide2">

                        <div class="content">

                            <h3>

                            <h1 className='text-2xl text-center'>Our Ratings !</h1>

                            </h3>

                            <p><span className='text-xl'>4.5/5</span> 3154 total<br />Learn with good and be better.</p>

                        </div>

                    </div>

                </div>
            </div>
            </div>
            <div className='home-body-content mt-5 mx-5'>
                <div className='grid  sm:grid-cols-1 lg:grid-cols-2 gap-3 p-10'>
                    <div className=' w-50 h-full p-10'>
                        <h1 className='text-3xl mb-6 text-color text-black font-black'>The Prodigious eLearning Courses for you</h1>
                      
                      
                       <div className='text-color' >
                       <h2 className='text-xl text-black font-black mb-6'>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua.</h2>
                        <h3 className='mb-4 text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing bramet consectetur adipisicing <br />amet consectetur adipisicing</h3>
                        <h3 className='mb-4 text-black' >Lorem ipsum dolor, sit amet consectetur adipisicing <br />amet consectetur adipisicingamet consectetur adipisicing</h3>
                        <h3 className='mb-4 text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing</h3>
                        
                       </div>

                    </div>
                    <div className=' grid grid-cols-2 w-50 h-full text-white gap-5'>
                        <div className='h-75 pt-10 rounded '>
                            
                            <div className='h-full box-shadow rounded-lg'>
                            <img  className='h-full  object-cover ' src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                            </div>
                        </div>
                        <div className=' pb-10'>
                        <div className='h-full box-shadow rounded-lg'>
                        <img className='h-full object-cover ' src="https://images.unsplash.com/photo-1556911220-dabc1f02913a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default HomeBody;