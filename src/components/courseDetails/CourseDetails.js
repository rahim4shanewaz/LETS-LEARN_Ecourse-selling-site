import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    return (
       
       
       <div >


                   
       



<div className="bgss  flex items-center p-6">
        
            
               <div className='m-10'>
                 <h1 className="text-white text-3xl mb-5">WELCOME</h1>
                 <h1 className="text-white text-5xl mb-5">Learn <span className='text-red-400'>{course.title}</span> With LET'S LEARN  </h1>
                 <p className='text-white mb-5'>This is the website you can Learn with best instructor and earn a strong skill <br /> We have lots of courses. you can find your courses here. Lets start your Journey with us.  </p>
                 <button className="btn text-xl btn-link"> <Pdf targetRef={ref} filename="course-details.pdf">
                {({ toPdf }) => <button onClick={toPdf}>DownLoad details in Pdf</button>}
                </Pdf></button>
                 
                 
                 
              
        </div>
        
                  </div>


         <div  className='flex flex-col justify-center  p-20 pt-5'>
          
        

                <div  className="card box rounded-none p-3  lg:card-side bg-base-100 shadow-xl">
                <figure><img className='' src={course.image} alt="Album"/></figure>
                <div   ref={ref} className="card-body lg:w-2/5">
                    <div className='p-2'>
                    <h2 className="card-title  text-5xl">{course.title}</h2>
                    <hr />
                    <p className='text-black '>{course.description}. In this course, Visual Storytelling with Photography, you'll use photography as the medium, as you gain the skills to identify and create powerful, meaningful, and enticing visual stories. You'll learn about composition, lighting, framing, movement and how to capture a story from a portrait, and moment to moment. Plus, you'll leave with a compelling photo essay designed by you. </p>
                    <hr />
                    <p className='text-2xl '>Price:   ${course.price}</p>
                    <p className='text-xl'>Duration:  {course.duration} <small>month</small> </p>
                    <p className='text-xl'>Rating: {course.rating}</p>
                    </div>
                    <div className="card-actions justify-end">

                   
                    
                    <Link to={`/checkout/${course.id}`}><button className="btn btn-outline btn-secondary">>Get premium access.</button></Link>
                    </div>
                </div>
                </div>
                

               


            </div>
       </div>
            
       
    );
};

export default CourseDetails;