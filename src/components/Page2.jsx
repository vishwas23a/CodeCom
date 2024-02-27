import React from 'react'
import "./Page2.css"
import pageimg1 from '../components/images/back.jpg'
import pageimg2 from '../components/images/codeimage.svg'
import pagelogo1 from '../components/images/previous.png'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Page2() {
  const Navigate=useNavigate();
    const [formData,setFormData]=useState({
      communityname :'',
      name: '',
      email:'',
      number:'',
      passcode:'',
      languages:[]
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState=>({...prevState,[name]: value}));
    };
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      if (checked) {
        setFormData(prevState => ({
          ...prevState,
          languages: [...prevState.languages, name]
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          languages: prevState.languages.filter(lang => lang !== name)
        }));
      }
    };
    const navigateToPage3=()=>{
      Navigate('/Page3')
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));

    navigateToPage3();
  };

  
  



  return (
    <div className='container' style={{backgroundImage:`url(${pageimg1})`}}>
     <div className="backbutton">
      <a onClick={()=>Navigate("/")}> <img src={pagelogo1} alt="" /></a> 
      

   
    </div> 
                <div className="codeheadpage2">
            <h2>Welcome to</h2>
            <h1>CodeCom</h1>
          </div>
      <img src={pageimg2} alt="" />
      <div className="form">

        <div className="details">
        <div className="inputs">
          <input type="text" name='communityname' value={formData.communityname} onChange={handleInputChange} placeholder='Community Name' />
          <input type="text" name='name' value={formData.name} onChange={handleInputChange} placeholder='Name' />
          <input type="email" name='email'value={formData.email} onChange={handleInputChange} placeholder='Email'  />
          <input type="number" name='number' value={formData.number} onChange={handleInputChange} placeholder='Number' />
          <input type="password" name='passcode' value={formData.passcode} onChange={handleInputChange} placeholder='PassCode'maxLength={8}/>

         <label>Java<input type="checkbox" name='java'onChange={handleCheckboxChange} className='check' /></label>
         <label>C++<input type="checkbox" name='c++' onChange={handleCheckboxChange} className='check' /></label>

         <label>React<input type="checkbox" name='react' onChange={handleCheckboxChange} className='check' /></label>
         <label>JavaScript<input type="checkbox" name='javascript' onChange={handleCheckboxChange} className='check' /></label>
         <button className="page2button" role="button" onClick={handleSubmit}>
              Create
            </button>
             
        </div>

        </div>
      </div>
    </div>
  )
}
