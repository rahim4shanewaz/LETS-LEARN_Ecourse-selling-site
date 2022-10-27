import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    return (
       
       
       <div >


                   
        <div className='bg-photo h-52'>

        <button className="btn text-xl btn-link"> <Pdf targetRef={ref} filename="course-details.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf></button>
        <div className='flex w-full flex-col justify-center items-center'>
        
      <div className='text-white  flex flex-col justify-center items-center'>
      <span className=' mt-7 font-bold text-black text-4xl'>Welcome</span>
        <span className='  text-4xl text-black'>Let's Learn</span>
        <p>This is the website you can Learn with best instructor and earn a strong skill <br /> We have lots of courses. you can find your courses here. Lets start your Journey with us.  </p>
        
      </div>
      </div>

        </div>
         <div  className='flex flex-col justify-center  p-20 pt-5'>
            {/* <div className='bg-white box mb-5'>
            <h1 className='text-3xl p-5 text-center font-bold'>ja esse tay ja etay ja esse tay ja etay ja esse tay ja etay</h1>
            </div> */}
        

                <div  className="card box rounded-none  lg:card-side bg-base-100 shadow-xl">
                <figure><img className='' src={course.image} alt="Album"/></figure>
                <div ref={ref} className="card-body lg:w-2/5">
                    <h2 className="card-title text-5xl">{course.title}</h2>
                    <p className='text-black'>{course.description}</p>
                    <p className='text-2xl'>Price:   ${course.price}</p>
                    <p className='text-xl'>Duration:  {course.duration} <small>month</small> </p>
                    <p className='text-xl'>Rating: {course.rating}</p>
                    <div className="card-actions justify-end">

                   
                    {/* <button className="btn btn-primary">Check Out</button> */}
                    {/* <button className="btn btn-outline btn-secondary">>Check Out</button> */}
                    <Link to={`/checkout/${course.id}`}><button className="btn btn-outline btn-secondary">>Get premium access.</button></Link>
                    </div>
                </div>
                </div>
                

               


            </div>
       </div>
            
       
    );
};

export default CourseDetails;