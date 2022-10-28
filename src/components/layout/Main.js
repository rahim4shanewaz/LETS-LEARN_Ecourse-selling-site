import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../categories/Category';
import Header from '../header/Header';
import HomeBody from '../home-body/HomeBody';
import LogIn from '../login/LogIn';
import NavBar from '../navbar/NavBar';
import NotFoundPage from '../notFound/NotFoundPage';
import SignUp from '../signUp/SignUp';
import Footer from './footer/Footer';

import './Main.css'

const Main = () => {
    return (
        <div className='full-bg '>
           
            <NavBar></NavBar>
            
            <Outlet></Outlet> 

            <Footer></Footer> 
        </div>
    );
};

export default Main;