import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Page3 from './Page3'
import Java from './Java'
import Cplus from './Cplus'
import JavaScr from './JavaScr'
import Reactjss from './Reactjss'
import Member from './Member'
import Resources from './Resources'
import Competition from './Competition'
import Videocall from './Videocall'

export default function Category() {
  return (
   <Routes>
    
    <Route path='/' element={<Page3/>}>
    <Route index element={<Java/>}/>
    <Route path='/Cplus' element={<Cplus/>}/>
    <Route path='/Reactjss' element={<Reactjss/>}/>
    <Route path='/JavaScr' element={<JavaScr/>}/>
    <Route path='/Member' element={<Member/>}/>
    <Route path='/Resources' element={<Resources/>}/>
    <Route path='/Competition' element={<Competition/>}/>
    <Route path='/Videocall' element={<Videocall/>}/>







    </Route>

   </Routes>
  )
}
