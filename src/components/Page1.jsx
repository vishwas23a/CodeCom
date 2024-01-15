import React from "react";
import "./Page1.css";
import Page2 from "./Page2";
import image1 from '../components/images/back.jpg'
import image2 from '../components/images/codeimage.svg'
import image3 from '../components/images/notes.png'
import image4 from '../components/images/notes.png'
import image5 from '../components/images/linkedin.png'
import image6 from '../components/images/instagram.png'
import image7 from '../components/images/github.png'
import image8 from '../components/images/logo1.png'
import image9 from '../components/images/aboutback.svg'




import { useNavigate } from "react-router-dom";

export default function Page1() {
const Navigate=useNavigate();
  
  return (
    <>

      <div className="background1" style={{backgroundImage:`url(${image1})` }}>
        <div className="code">
          <div className="codehead">
            <h2>Welcome to</h2>
            <h1>CodeCom</h1>
          </div>
          <div className="codeimage" style={{backgroundImage:`url(${image2})` }}></div>
        </div>
        <div className="codebox">
          <div className="codebox1" style={{backgroundImage:`url(${image3})` }}>
            <h2>Creat</h2>
            <h3> Community</h3>
            
        <button  className="button1" role="button" onClick={()=>Navigate('Page2')}>
              Create
            </button>
          </div>
          <div className="codebox2" style={{backgroundImage:`url(${image4})`}}>
            <h2>Join a</h2>
            <h3> Community</h3>
            <input type="text" placeholder="Code" />
            <button className="button2" role="button">
              Join
            </button>
          </div>
        </div>
        <div className="codeicons">
          <div className="linkedin">
            <a href="https://linkedin.com/in/vishwas-verma23a" target="_blank">
              <img src={image5} alt="" />
            </a>
          </div>
          <div className="insta">
            <a href="https://www.instagram.com/vishwas_23a/" target="_blank">
              <img src={image6} alt="" />
            </a>
          </div>
          <div className="insta">
            <a href="https://github.com/vishwas23a" target="_blank">
              <img src={image7} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="codeabout">
        <h1 className="abouthead">About Us</h1>

        <div className="aboutvision">
          <div className="visionimage" style={{backgroundImage:`url(${image9})`}}>
            <div className="visionimage1">
              <h2>Our Vision</h2>

              <p>
          
                <img src={image8}alt="" /> Lorem ipsum doloratione
                maxime, maiores veniam deserunt iste expli.
              </p>
              <p>
                
                <img src={image8} alt="" />
                Lorem ipsum dolors veniam deserunt iste explicabo rerum!
                Doloribus
              </p>

              <p>
               
                <img src={image8}alt="" /> Lorem ipsum dolors
                veniam deserunt iste explicabo rerum! Doloribus
              </p>
            </div>
            <div className="visionimage2">
              <h2>Service</h2>

              <p>
            
                <img src={image8} alt="" /> Lorem ipsum doloratione
                maxime, maiores veniam deserunt iste expli
              </p>
              <p>

                <img src={image8}alt="" />
                Lorem ipsum dolors veniam deserunt iste explicabo rerum!
                Doloribu.
              </p>

              <p>
              
                <img src={image8} alt="" /> Lorem ipsum dolors
                veniam deserunt iste explicabo rerum! Doloribus,
              </p>
            </div>
            <div className="team">
              <p>Hi I am a</p>
              <p className="front"> Frontend</p>
              <p>Developer</p>

              <h1 className="teamhead">Vishwas</h1>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="product1">
            <h2>Resource</h2>
            <a href="SolutionBlog">Solution</a>
            <a href="#">Chat System</a>
            <a href="#">Notes</a>

            <a href="#">Video call</a>
          </div>
          <div className="product2">
            <h2>Target</h2>
            <a href="#">College</a>
            <a href="#">Coding clubs</a>
            <a href="#">Friends</a>
            <a href="#">Open Community</a>
          </div>
          <div className="product3">
            <h2>Contact Info</h2>
            <a href="#">vishwasverma23@gmail.com</a>
            <a href="#"> 9506862942</a>
          </div>
        </div>
      </div>
    </>
  );
}
