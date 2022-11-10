import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>

<div className=" h-44 lg:flex justify-center items-center">
                <div className="flex flex-col gap-5  ">
                    <h1 className="text-5xl font-bold">Check our Blog</h1>
                    <p className="text-center font-bold">Learn some info, Hunt with <span className=" bg-black p-1 text-white">LET'S LEARN</span> </p>
                </div>
            </div>
            <div className='lg:flex gap-5 m-10 justify-center'>
            <div className="login-div1">
                <h1 className='text-3xl p-2'>What is CORS?</h1>
                <h1 className='text-xl p-5'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</h1>
                
  
 
            </div>
            <div className="login-div1">
                <h1 className='text-3xl mr-2'>What is Node? How does Node work?</h1>
                <h1 className='text-xl p-1'>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. <br /> <br /> ode.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br /> Node.js basically works on two concept

Asynchronous
Non-blocking I/O</h1>


<h1></h1>
                
  
 
            </div>
            
            </div>
            <div className='lg:flex gap-5 m-10 justify-center'>
            <div className="login-div1">
                <h1 className='text-3xl p-2'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <h1 className='text-xl p-5'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.</h1>
                
  
 
            </div>
            <div className="login-div1">
                <h1 className='text-3xl mr-2'>How does the private route work?</h1>
                <h1 className='text-xl p-1'>Steps for writing public and private routes in React app using React Router

When developing a React Application with Authentication, we might require public and private routes. Let's first see what they are?

Public Routes
Public routes are Log in, SignUp, Forgot Password, Reset Password. In simple words, These routes can be accessed before login into the App.

Private Routes
Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

In this article, we can see. How to create public and private routes using react-router for your react apps.</h1>
                
  
 
            </div>
            
            </div>
        </div>
    );
};

export default Blog;