import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './Category.css';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://my-projects-10-server.vercel.app/allProducts')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    
    return (
        <div>
            <div className=" h-44 flex justify-center items-center">
                <div className="flex flex-col gap-5  ">
                    <h1 className="text-5xl font-bold">Check our total Courses</h1>
                    <p className="text-center font-bold">Looking For skill, Hunt with <span className=" bg-black p-1 text-white">LET'S LEARN</span> </p>
                </div>
            </div>


            <div className='md:grid-cols-1 grid lg:grid-cols-3 mx-20  gap-0 mb-5'>


           

            <div className=" wid flex  gap-0">
                
                <div className="wid bg-white mb-5">
                    <div className="wid h-20 bg-black  flex flex-col justify-center  p-3">
                    <h1 className='text-2xl mb-3 font-black  text-white text-center mt-4'> Course Category {categories.length}</h1>
                    </div>
                    <div className="p-1">
                        <div className="flex flex-col items-center mt-5">
                            <div>
                            {
                        categories.map(category => <div className='mb-2 p-2' key={category.id}> 
                        
                        <Link to={`/courses/${category.id}`}><button className="btn btn-wide">{category.title}</button></Link>
                        
                        </div>)
                    }
                            </div>
                           

                        </div>
                    </div>
                    
                </div>

            </div>
            <div className='md:col-span-3 lg:col-span-2 w-full'>
                



                <div className='w-full   bg-white '> 
                <div className='grid  sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 '>
                {
                    categories.map(allCategory => <div  key= {allCategory.id}> 
                    
                                                <div className="card rounded-0 card-compact w-4/5 mb-10 mx-auto mt-5 bg-base-100 shadow-xl">
                            <figure><img src={allCategory.image} alt="Shoes" /></figure>
                            <div className="card-body rounded-0">
                                <h2 className="card-title">{allCategory.title}</h2>
                                <h2 className="card-title">Duration: {allCategory.duration}</h2>
                                <p className='text-2xl'>Price: {allCategory.price}</p>
                                <p className='text-xl'>Rating: {allCategory.rating}</p>
                                <div className="card-actions justify-end">

                                    <Link to={`/courses/${allCategory.id}`}><button className="btn btn-outline btn-secondary">See DetailS</button></Link>
                                
                               
                                </div>
                            </div>
                            </div>
                    
                    
                    
                    
                    </div>)
                }
                </div>
                
                
                
                </div>
                
            
            </div>


            </div>

        </div>
    );
};

export default Category;