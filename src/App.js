
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Category from './components/categories/Category';
import Header from './components/header/Header';
import Main from './components/layout/Main';
import LogIn from './components/login/LogIn';
import SignUp from './components/signUp/SignUp';
import CheckOut from './components/checkOut/CheckOut';
import Blog from './components/blog/Blog';
import Faq from './components/faq/Faq';
import NotFoundPage from './components/notFound/NotFoundPage';
import PrivateRoute from './privateRoute/PrivateRoute';
import TermsAndCondition from './components/termsAndCondition/TermsAndCondition';
import CourseDetails from './components/courseDetails/CourseDetails';
import About from './components/about/AboutUs';
import AboutUs from './components/about/AboutUs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Header></Header>
        },
        {
          path: '/home',
          element: <Header></Header>
        },
        
        {
          path: '/courses',
          element: <Category></Category>
        },
        {
          path:"/courses/:id",
          element:<CourseDetails></CourseDetails>,
          loader: ({params}) => fetch(`https://my-projects-10-server.vercel.app/product/${params.id}`)

        },
        {
          path:'/login',
          element: <LogIn></LogIn>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params}) => fetch(`https://my-projects-10-server.vercel.app/product/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>

        },
        {
          path:'/aboutus',
          element:<AboutUs></AboutUs>

        },
        {
          path:'/terms',
          element: <TermsAndCondition></TermsAndCondition>
        },
        {
          path: '/faq',
          element: <Faq></Faq>
        }
      ] 
    },

    {
      path: '*',
      element: <NotFoundPage></NotFoundPage>

    }
  ])





  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
      
      
      
     
     {/* <NavBar></NavBar>
      <Category></Category> */}
      
     
    </div>
  );
}

export default App;
