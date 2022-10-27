import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div className='m-10 p-10'>
            <h1>We can't stress this enough - a T&C isn't mandatory, but you should treat it like it is. Here's why.

You can decide which country's laws apply to govern the agreement. This is otherwise known as choosing the jurisdiction. You will generally choose the country where the website, or business, is based.
You can remove or delete abusive accounts. For example, say you run a social media platform and explain that people who post inflammatory, abusive, or explicit content will be blocked from the service. Someone posts abusive content. You can block their account without worry, because you can rely on your Terms and Conditions agreement.
You can limit your responsibility. You can include disclaimer clauses in your agreement that say you're not liable for third party content, and you don't endorse it. You can also say that you're not responsible for mistakes and typos, or content uploaded by users which other users may find offensive.
You can manage a user's expectations of your website or platform. When the terms are clear, users know what they can and cannot expect from you.
You can set your own site rules and the consequences for violating these rules, within legal limits. You can't contract out of certain rules such as the law of negligence.
It's vital that you protect your intellectual property rights. By setting out what your rights are in the Terms and Conditions agreement, you can take action against users who infringe your rights. It should be clear that the logo, brand, and content belong to you.</h1>
            <p>Go Back to : <NavLink className={ 'text-emerald-500'} to='/signup'>Registration</NavLink></p>
        </div>
    );
};

export default TermsAndCondition;