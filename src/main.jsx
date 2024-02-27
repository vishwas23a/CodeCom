import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Page2 from './components/Page2.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SolutionBlog from './components/SolutionBlog.jsx'
import Page3 from './components/Page3.jsx'
import Target from './components/Target.jsx'
import Java from './components/Java.jsx'
import Cplus from './components/Cplus.jsx'
import Reactjss from './components/Reactjss.jsx'
import JavaScr from './components/JavaScr.jsx'
import Member from './components/Member.jsx'
import Resources from './components/Resources.jsx'
import Competition from './components/Competition.jsx'
import Videocall from './components/Videocall.jsx'
import Page1 from './components/Page1.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    element: <Page1/>,
  },
  {
    path:"Page2",
    element:<Page2/>,
  },
  
  {
    path: "Page3",
    element: <Page3/>,
    children:[{
      path:'Java',
      element:<Java/>,
    },
    {
      path:'Cplus',
      element:<Cplus/>,
    },
    {
      path:'Reactjss',
      element:<Reactjss/>,
    },
    {
      path:'JavaScr',
      element:<JavaScr/>,
    },
    {
      path:'Member',
      element:<Member/>,
    },
    {
      path:'Resources',
      element:<Resources/>,
    },
    {
      path:'Competition',
      element:<Competition/>,
    },
    {
      path:'Videocall',
      element:<Videocall/>,
    }

  
  ]
  },
  {
    path: "SolutionBlog",
    element: <SolutionBlog/>,
  },
  {
    path: "Target",
    element: <Target/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
