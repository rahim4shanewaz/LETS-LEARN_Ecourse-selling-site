import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const course = useLoaderData();
    return (
        <div>
            <div className='flex box-container gap-3 w-full flex-col justify-center items-center'>
            
            <div class="login-div5 w-3/6">
                <div className='border p-3 w-full border-gray-500'>
                   <div className='lg:flex'>
                   <div className='lg:w-1/5 mr-5'>
                        <img className='w-full' src={course.image} alt="" />
                    </div>
                    <div className='text-black'>
                    <h1 >Product name: <span className='text-black ml-5 font-black'>{course.title}</span> </h1>
                    <h1 >Product price: <span className='text-black ml-5 font-black'>${course.price}</span> </h1>
                    <hr />
                    <h1 className='mt-2' >Total cost: <span className='text-black ml-5 font-black'>${course.price}</span> </h1>

                    
                   
                    </div>
                   </div>
                </div>
  
                {/* <div class="title">Register First</div>
                
                <div class="fields1">
                    <div class="username">
                        
                        <input type="text" class="user-input" placeholder="name" />
                        </div>
                    <div class="username"><input type="text" class="user-input" placeholder="image url" /></div>
                    <div class="username"><input type="email" class="user-input" placeholder="email" /></div>
                    <div class="password"><input type="password" class="pass-input" placeholder="password" /></div>
                </div>
                <button class="signin-button">Register</button>
                <div class="link">
                    <a href="#">Already have an account? </a> <br /> <a href="#">Log In</a>
                </div> */}
             </div>



             
             <div class="login-div5 w-2/4 p-2">
  
               
                
                <div className='border p-3 w-full border-gray-500'>
                <div class="fields1 text-black">
                    <h1 className='text-3xl'>Payment Details</h1>
                    <p>Complete your purchase by providing your Payment info </p>
                    <br />
                    <br />
                    <p>Enter Email address</p>
                    <div class="username"><input type="email" class="user-input" placeholder="email" /></div>
                  
                    <p>Enter Card Number</p>
                    <div class="username"><input type="text" class="user-input" placeholder="Card number" /></div>
                    <p>Enter Cardholder name</p>
                    <div class="username"><input type="text" class="user-input" placeholder="Cardholder" /></div>
                    <p>Enter VAT number</p>
                    <div class="username"><input type="text" class="user-input" placeholder="VAT number" /></div>
                    <p>Enter Billing address</p>
                    <div className='lg:flex flex-col gap-3'>

                    <div class="username"><input type="text" class="user-input" placeholder="Address" /></div>
                    <div class="username"><input type="text" class="user-input" placeholder="City" /></div>
                    </div>
                    <div className='lg:flex flex-col gap-3'>
                        
                    <div class="username"><input type="text" class="user-input" placeholder="ZIP" /></div>
                    <div class="username"><input type="text" class="user-input" placeholder="State" /></div>
                    </div>
                    <div className='flex gap-3'>
                        
                    <div class="username"><input type="text" class="user-input" placeholder="Country" /></div>
                    
                    </div>
                    

               
                </div>
                <button class="signin-button">Proceed to payment </button>
                </div>
             </div>
            
        </div>
        </div>
    );
};

export default CheckOut;