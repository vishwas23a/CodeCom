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
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
