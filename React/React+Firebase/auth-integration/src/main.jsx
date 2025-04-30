import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Roots from './Layouts/Roots.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Component/Contexts/AuthProvider.jsx';
import Orders from './Component/Orders/Orders.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import Profile from './Component/Profile/Profile.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';



const router = createBrowserRouter([
  {
    path:"/",
    Component:Roots,
    children:[
      {
        index:true,
        Component:Home,

      },
      {
        path:"login",
        Component:Login,
      },
      {
        path:"register",
        Component:Register,
      },
      {
        path:"orders",
        //Component:Orders
        element: <PrivateRoutes>
          <Orders></Orders>
        </PrivateRoutes>
      },
      {
        path:"profile",
        element: <PrivateRoutes>
          <Profile></Profile>
        </PrivateRoutes>
      },
      {
        path:"dashboard",
        element: <PrivateRoutes>
          <Dashboard></Dashboard>
        </PrivateRoutes>
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <RouterProvider router={router} />
 </AuthProvider>
)
