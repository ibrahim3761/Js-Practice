import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Roots from './Layouts/Roots.jsx';
import Home from './Componenet/Home/Home.jsx';
import Login from './Componenet/Log in/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Roots,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/login',
        Component:Login
      },
      {
        
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
)
