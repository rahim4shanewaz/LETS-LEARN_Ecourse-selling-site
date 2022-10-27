import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div className='flex flex-col justify-center  p-20'>
            {/* <div className='bg-white box mb-5'>
            <h1 className='text-3xl p-5 text-center font-bold'>ja esse tay ja etay ja esse tay ja etay ja esse tay ja etay</h1>
            </div> */}
        

                <div className="card box rounded-none  lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-50' src={course.image} alt="Album"/></figure>
                <div className="card-body w-2/5">
                    <h2 className="card-title text-5xl">{course.title}</h2>
                    <p className='text-black'>{course.description}</p>
                    <p className='text-2xl'>Price:   ${course.price}</p>
                    <p className='text-xl'>Duration:  {course.duration} <small>month</small> </p>
                    <p className='text-xl'>Rating: {course.rating}</p>
                    <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Check Out</button> */}
                    {/* <button className="btn btn-outline btn-secondary">>Check Out</button> */}
                    <Link to={`/checkout/${course.id}`}><button className="btn btn-outline btn-secondary">>Check Out</button></Link>
                    </div>
                </div>
                </div>


            </div>
            
       
    );
};

export default CourseDetails;