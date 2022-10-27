import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeBody from '../home-body/HomeBody';
import NavBar from '../navbar/NavBar';
import './Header.css'

const Header = () => {
    return (
        <div>
            
            <div className='p-5 text-center '>
            
            <div className="carousel w-full shadow-car">
  <div id="slide1" className="carousel-item relative w-full ">
    <div className='car-img '>
    <img src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" className="w-full" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 

      <div className='flex w-full justify-end '>
      
      <div className='text-white car-text flex flex-col justify-start'>
        <span className=' text1 text-4xl text-white'>Welcome</span>
        <span className=' text2 text-4xl text-white'>Let's Learn</span>
        <p >This is the website you can Learn with best instructor and earn a strong skill <br /> We have lots of courses. you can find your courses here. Lets start your Journey with us.  </p>
        <div class="box-1 mt-3">
            <div >
            <NavLink to="/courses"><button className="btn btn-outline btn-secondary">>Check Our All Courses</button></NavLink>
            </div>
        </div>
      </div>
      </div>



     
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className='car-img'>
    <img src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>



      
      <div className='flex w-full justify-end text-white'>
      <div className='text-black car-text flex flex-col justify-start '>
      <span className=' text3 text-4xl text-white'>Welcome</span>
        <span className=' text4 text-4xl text-white'>Let's Learn</span>
        <p className='text-white'>This is the website you can Learn with best instructor and earn a strong skill <br /> We have lots of courses. you can find your courses here. Lets start your Journey with us.  </p>
        <div class="box-1 mt-3">
            <div >
            <NavLink to="/courses"><button className="btn btn-outline btn-secondary">>Check Our All Courses</button></NavLink>
            </div>
        </div>
      </div>
      </div>
      
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='car-img'>
    <img src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 



            <div className='flex w-full '> 
            <div className='text-white car-text2 flex flex-col justify-start'>
            <span className=' text3 text-4xl text-white'>Welcome</span>
        <span className=' text4 text-4xl text-white'>Let's Learn</span>
        <p>This is the website you can Learn with best instructor and earn a strong skill <br /> We have lots of courses. you can find your courses here. Lets start your Journey with us.  </p>
        <div class="box-1 mt-3">
            <div >
            <NavLink to="/courses"><button className="btn btn-outline btn-secondary">>Check Our All Courses</button></NavLink>
            </div>
        </div>
      </div>
            </div>
      

      



      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className='car-img'>
    <img src="https://images.unsplash.com/photo-1509701852059-c221a6f1e878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=791&q=80" />
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 



      <div className='flex w-full'>
      <div className='text-white car-text2 flex flex-col justify-start'>
      <span className=' text3 text-4xl'>Welcome</span>
        <span className=' text4 text-4xl text-white'>Let's Learn</span>
        <p>This is the website you can Learn with best instructor and earn a strong skill <br /> We have lots of courses. you can find your courses here. Lets start your Journey with us.  </p>
        <div class="box-1 mt-3">
            <div >
            <NavLink to="/courses"><button className="btn btn-outline btn-secondary">>Check Our All Courses</button></NavLink>
            </div>
        </div>
      </div>
      </div>
      



      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
            <HomeBody></HomeBody>
        </div>
    );
};

export default Header;