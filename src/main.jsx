import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Roots/Root';
import Home from './components/Home/Home';
import Error from './Error/Error';
import ListBooks from './components/ListBooks/ListBooks';
import PageToRead from './components/PageToRead/PageToRead';
import Click from './components/Home/Click';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('./books.json'),
      },
      {
        path:'/listedBooks',
        element:<ListBooks></ListBooks>,
      },
      {
        path:'/pageToRead',
        element:<PageToRead></PageToRead>,
      },
      {
        path:'/:bookId',
        element:<Click></Click>,
        loader:()=> fetch('./books.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
