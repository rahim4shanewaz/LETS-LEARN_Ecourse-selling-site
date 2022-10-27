import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h1>ja esse tay terms and condition</h1>
            <p>Go Back to : <NavLink className={ 'text-emerald-500'} to='/signup'>Registration</NavLink></p>
        </div>
    );
};

export default TermsAndCondition;