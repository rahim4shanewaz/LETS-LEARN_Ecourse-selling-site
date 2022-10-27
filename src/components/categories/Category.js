import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './Category.css';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/allProducts')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    console.log(categories.length);
    return (
        <div>
            <div className='flex '>
                <div className='w-1/4 bg-white m-10 box-shadow'>

                   <div className='p-5'><h1 className='text-2xl mb-3 font-black text-center mt-4'> Total Categories: {categories.length}</h1>
                   <hr /></div>

                    {
                        categories.map(category => <div className='mb-3 p-4' key={category.id}> 
                        
                        <Link to={`/courses/${category.id}`}><button className="btn btn-wide">{category.title}</button></Link>
                        
                        </div>)


                        // <Link to={`/courses/${allCategory.id}`}><button className="btn btn-outline btn-secondary">See DetailS</button></Link>
                    }

                </div>
                <div className='w-full   bg-white m-10 box-shadow'> 
                <div className='grid  sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-24'>
                {
                    categories.map(allCategory => <div  key= {allCategory.id}> 
                    
                                                <div className="card card-compact w-4/5 mb-10 mx-auto mt-10 bg-base-100 shadow-xl">
                            <figure><img src={allCategory.image} alt="Shoes" /></figure>
                            <div className="card-body">
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
    );
};

export default Category;