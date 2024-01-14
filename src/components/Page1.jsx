import React from 'react'
import './Page1.css'

export default function Page1() {
  return (
    <>
    <div className='background1'>
      <div className="code">
        <div className="codehead">
        <h2>Welcome to</h2>
        <h1>CodeCom</h1>
        </div>
        <div className="codeimage">
        </div>
      </div>
      <div className="codebox">

        <div className="codebox1"> 
        <h2>Creat</h2><h3> Community</h3>
        <button className="button1" role="button">Create</button>

        </div>
        <div className="codebox2">

        <h2>Join a</h2><h3> Community</h3>
        <input type="text" placeholder='Code'/>
        <button className="button2" role="button">Join</button>
        </div>

      </div>
      <div className="codeicons">
      <div className="linkedin"><a href="https://linkedin.com/in/vishwas-verma23a" target="_blank" ><img src="./images/linkedin.png" alt=""/></a></div>
          <div className="insta"><a href="https://www.instagram.com/vishwas_23a/" target="_blank"><img src="./images/instagram.png" alt=""/></a></div>
          <div className="insta"><a href="https://github.com/vishwas23a" target="_blank"><img src="./images/github.png" alt=""/></a></div>

      </div>
</div>
<div className="codeabout">

<h1 className='abouthead'>About Us
</h1>

<div className="aboutvision">
<div className="vision1">
  <h2>Our Vision</h2>

 
  <p> * Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita nihil quo magni voluptatibus sint minima saepe, quam ratione maxime, maiores veniam deserunt iste explicabo rerum! Doloribus, nisi saepe. Saepe.</p>
  <p> * Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita nihil quo magni voluptatibus sint minima saepe, quam ratione maxime, maiores veniam deserunt iste explicabo rerum! Doloribus, nisi saepe. Saepe.</p>

</div>
<div className="visionimage">
  <img src="" alt="" />
</div>
</div>
</div>



</>
  )
}
