import React from 'react';
import Category from '../categories/Category';
import Header from '../header/Header';
import HomeBody from '../home-body/HomeBody';
import LogIn from '../login/LogIn';
import NavBar from '../navbar/NavBar';
import SignUp from '../signUp/SignUp';

import './Main.css'

const Main = () => {
    return (
        <div className='full-bg'>
            <NavBar></NavBar> 
            <Header> </Header>
            <HomeBody></HomeBody>
            {/* <Header> </Header>
            <Category></Category>
            <LogIn></LogIn>
            <SignUp></SignUp>
            <HomeBody></HomeBody> */}   
        </div>
    );
};

export default Main;