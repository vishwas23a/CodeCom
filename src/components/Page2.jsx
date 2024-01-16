import React from 'react'
import "./Page2.css"
import pageimg1 from '../components/images/back.jpg'
import pageimg2 from '../components/images/codeimage.svg'
import { useNavigate } from 'react-router-dom'
export default function Page2() {
  const Navigate=useNavigate();

  return (
    <div className='container' style={{backgroundImage:`url(${pageimg1})`}}>
                <div className="codeheadpage2">
            <h2>Welcome to</h2>
            <h1>CodeCom</h1>
          </div>
      <img src={pageimg2} alt="" />
      <div className="form">

        <div className="details">
        <div className="inputs">
          <input type="text" placeholder='Community Name' />
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email'  />
          <input type="number" placeholder='Number' />
         <label>Java<input type="checkbox" className='check' /></label>
         <label>C++<input type="checkbox" className='check' /></label>

         <label>React<input type="checkbox" className='check' /></label>
         <label>JavaScript<input type="checkbox" className='check' /></label>
         <button className="page2button" role="button" onClick={()=>Navigate('/Page3')}>
              Create
            </button>
             
        </div>

        </div>
      </div>
    </div>
  )
}
