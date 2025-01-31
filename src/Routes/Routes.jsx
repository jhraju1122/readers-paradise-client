 import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddBooks from "../pages/Shared/AddBooks/AddBooks";
import Login from "../pages/Shared/Login/Login";
import Register from "../pages/Shared/Register/Register";
import ErrorPage from "../Errorpage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import AllBooks from "../AllBooks/AllBooks";
 
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addbooks',
            element: <AddBooks></AddBooks>
            
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/BookDetails',
            element: <BookDetails></BookDetails>
        },
        {
            path: '/allbooks',
            element:  <AllBooks></AllBooks>,
            loader: () => fetch('http://localhost:5000/users')

        }
        
       
         
      ]
    },
 
  ]);