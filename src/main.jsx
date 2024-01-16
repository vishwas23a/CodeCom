import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Page2 from './components/Page2.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SolutionBlog from './components/SolutionBlog.jsx'
import Page3 from './components/Page3.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"Page2",
    element:<Page2/>,
  },
  {
    path: "SolutionBlog",
    element: <SolutionBlog/>,
  },
  {
    path: "Page3",
    element: <Page3/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
