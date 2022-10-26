
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
          path:'/login',
          element: <LogIn></LogIn>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path:'/checkout',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path: '/blog',
          element: <PrivateRoute><Blog></Blog></PrivateRoute>

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
