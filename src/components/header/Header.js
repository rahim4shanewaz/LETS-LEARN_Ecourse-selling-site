import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeBody from '../home-body/HomeBody';
import NavBar from '../navbar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div>

          <div>
          <div className=" h-44 flex justify-center items-center">
                <div className="flex flex-col gap-5  ">
                    <h1 className="text-5xl font-bold">LET'S LEARN SMARTLY</h1>
                    <p className="text-center font-bold">Looking For skill, Hunt with <span className=" bg-black p-1 text-white">LET'S LEARN</span> </p>
                </div>
            </div>
          </div>
                  <div className="bgs  flex items-center p-6">
        
            
               <div className='m-10'>
                 <h1 className="text-white text-3xl mb-5">WELCOME</h1>
                 <h1 className="text-white text-5xl mb-5">Learn With LET'S LEARN</h1>
                 <p className='text-white mb-5'>This is the website you can Learn with best instructor and earn a strong skill <br /> We have lots of courses. you can find your courses here. Lets start your Journey with us.  </p>
                 
                 <div>
            <NavLink to="/courses"><button className="hover:bg-green-400 bg-transparent py-3 border text-2xl border-1 text-white font-semibold px-6">>Check Our All Courses</button></NavLink>
           
        </div>
        </div>
                  </div>





                    <div className='w-full mt-5'>
                      <div className='md:grid-cols-1 grid lg:grid-cols-3  gap-4 mb-5'>


                        <div className='md:col-span-3 lg:col-span-2 w-full'>

                        <div className=" bg-white mb-5">
                    <div className="flex flex-col gap-3 items-center pt-10 px-10">
                        <h1 className="text-3xl text-center">Learn online in <br /> LET'S LEARN <br /> from the leaders  in business of Colorful Media</h1>
                        
                    </div> 

                    <div className="p-6">
                      <div className=" bg-black mb-5">
                        <img className="opacity-50" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

                        
                      </div>
                      


                       <div className="mb-3">
                        <p><span className="font-black">More Hats!</span> <br /> All paid LET'S LEARN Online courses, with the exception of CORe, grant a Certificate of Completion. While each program can be completed on your own schedule, there are weekly deadlines to ensure you’re progressing through the course in step with your peers and taking full advantage of all networking and social learning opportunities.

To earn a Certificate of Completion, you must complete all coursework in a thoughtful and timely manner, including meeting weekly deadlines, finishing assignments, offering feedback on others’ reflections, and contributing to conversations on the course platform. As digital media becomes more visually oriented, having the expertise and understanding of how to engage audiences through visual media becomes more important. Whether you’re a budding photographer, artist, videographer, or visual communications professional, being skilled in communicating messages, emotions, narratives and information in a way which reaches viewers at a deep and lasting level is critical for every profession. 

In this course, Visual Storytelling with Photography, you'll use photography as the medium, as you gain the skills to identify and create powerful, meaningful, and enticing visual stories. You'll learn about composition, lighting, framing, movement and how to capture a story from a portrait, and moment to moment. Plus, you'll leave with a compelling photo essay designed by you. </p>

                       </div>

                       <div className="flex justify-between">
                        
                        <button className=" bg-black text-white hover:bg-slate-400 hover:border-0  px-6 py-2">Interested <span className=" mx-2 h-2 font-black px-2 py-1 w-2 bg-white text-black">5</span> </button>
                       </div>
                    </div>
                        </div>

                        </div>

                        <div className=" wid flex flex-col gap-5">
                      <div className="wid  bg-black mb-5">
                    <div>
                       
                          <img className="h-3/5 object-cover w-full" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>
                    <div className="text-white p-2">
                       <p className="text-2xl mb-2">Why Us</p>
                        <p>Let's Learn does a great job of making its free courses easy to find, along with the filter means you can find your chosen course in no time. With all of Coursera's free courses, you have the option to Purchase the Course, meaning you will earn a certificate when you successfully complete the course. </p>
                    </div>
                </div>

               
                <div className="wid bg-white mb-5">
                    <div className="wid h-20 bg-black  flex flex-col justify-center  p-3">
                        <h1 className="text-white  text-2xl">What You Get</h1>
                    </div>
                    <div className="p-3">
                        <div className="wid">
                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="w-full h-44 bg-black ">
                                    <img className="w-full h-full object-cover hover:drop-shadow-md  hover:opacity-50" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                                </div>
                                <div className="w-full h-44 bg-black">
                                    <img className="w-full h-full object-cover hover:drop-shadow-md  hover:opacity-50" src="https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                                </div>
                                <div className="w-full h-44 bg-black">
                                    <img className="w-full h-full object-cover hover:drop-shadow-md  hover:opacity-50" src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80" alt="" />
                                </div>
                                <div className="w-full h-44 bg-black">
                                    <img className="w-full h-full object-cover hover:drop-shadow-md  hover:opacity-50" src="https://images.unsplash.com/photo-1612861389438-73b717dc088e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className="wid bg-white mb-5">
                    <div className="wid h-20 bg-black  flex flex-col justify-center  p-3">
                        <h1 className="text-white  text-2xl">Follow Us on</h1>
                    </div>
                    <div className="p-3">
                        <div className="wid">
                            <div>
                            <div className='flex justify-evenly'>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>f</span></button>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>t</span></button>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>G</span></button>
                <button class=" text-2xl hover:text-green-500 px-2 h-10"><span className='bg-white font-black px-2 hover:bg-green-600 text-black '>in</span></button>
                
                
            </div>
                            </div>
                           

                        </div>
                    </div>
                    
                </div>
                <div className="wid bg-white mb-5">
                    <div className="wid h-20 bg-black  flex flex-col justify-center  p-3">
                        <h1 className="text-white  text-2xl">Subscribe</h1>
                    </div>
                    <div className="p-3">
                        <div className="wid">
                            <div>
                               <p>Enter your e-mail below and get notified on the latest Courses.</p>
                               <input className="border border-black w-full p-3 mt-2" placeholder="Enter Your e-mail" type="text" />
                               <button className="mt-2 bg-red-600 text-center h-12 w-full hover:bg-slate-400 font-semibold">Subscribe</button>
                            </div>
                           

                        </div>
                    </div>
                    
                </div>



                       </div>

                      </div>
                 
                    </div>
                    
        </div>
    );
};

export default Header;