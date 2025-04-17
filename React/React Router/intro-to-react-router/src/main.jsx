import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Componenets/Root/Root.jsx';
import Home from './Componenets/Home/Home.jsx';
import Mobile from './Componenets/Mobile/Mobile.jsx';
import Laptops from './Componenets/Laptops/Laptops.jsx';
import Users from './Componenets/Users/Users.jsx';
import Users2 from './Componenets/Users2/Users2.jsx';
import UserDetails from './Componenets/UserDetails/UserDetails.jsx';
import Posts from './Componenets/Posts/Posts.jsx';
import PostDetails from './Componenets/PostDetails/PostDetails.jsx';


const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {index:true, Component:Home},
      {path:"mobile", Component:Mobile},
      {path:"laptops", Component:Laptops},
      {
        path:"users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users

      },
      {
        path:"users2",
        element:<Suspense fallback={<div>Loading...</div>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      {
        path:"users/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails
      },
      {
        path:"posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:"posts/:postId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
    ]
  },
  {
    path:"/about",
    element:<div>About</div>,
  },
  {
    path:"/blogs",
    element:<div>My Blogs</div>,
  },
  {
    path:"app",
    Component:App
  },
  {
    path:"app2",
    element:<App></App>,
  }
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}></RouterProvider>

)
