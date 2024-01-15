import React from "react";
import "./Page1.css";
import Page2 from "./Page2";
import backg from '../../public/images/back.jpg'
import { useNavigate } from "react-router-dom";

export default function Page1() {
const Navigate=useNavigate();
  
  return (
    <>

      <div className="background1" style={{backgroundImage:`url(${backg})` }}>
        <div className="code">
          <div className="codehead">
            <h2>Welcome to</h2>
            <h1>CodeCom</h1>
          </div>
          <div className="codeimage"></div>
        </div>
        <div className="codebox">
          <div className="codebox1">
            <h2>Creat</h2>
            <h3> Community</h3>
            
        <button  className="button1" role="button" onClick={()=>Navigate('Page2')}>
              Create
            </button>
          </div>
          <div className="codebox2">
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
              <img src="./images/linkedin.png" alt="" />
            </a>
          </div>
          <div className="insta">
            <a href="https://www.instagram.com/vishwas_23a/" target="_blank">
              <img src="./images/instagram.png" alt="" />
            </a>
          </div>
          <div className="insta">
            <a href="https://github.com/vishwas23a" target="_blank">
              <img src="./images/github.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="codeabout">
        <h1 className="abouthead">About Us</h1>

        <div className="aboutvision">
          <div className="visionimage">
            <div className="visionimage1">
              <h2>Our Vision</h2>

              <p>
          
                <img src="./images/logo1.png" alt="" /> Lorem ipsum doloratione
                maxime, maiores veniam deserunt iste expli.
              </p>
              <p>
                
                <img src="./images/logo1.png" alt="" />
                Lorem ipsum dolors veniam deserunt iste explicabo rerum!
                Doloribus
              </p>

              <p>
               
                <img src="./images/logo1.png" alt="" /> Lorem ipsum dolors
                veniam deserunt iste explicabo rerum! Doloribus
              </p>
            </div>
            <div className="visionimage2">
              <h2>Service</h2>

              <p>
            
                <img src="./images/logo1.png" alt="" /> Lorem ipsum doloratione
                maxime, maiores veniam deserunt iste expli
              </p>
              <p>

                <img src="./images/logo1.png" alt="" />
                Lorem ipsum dolors veniam deserunt iste explicabo rerum!
                Doloribu.
              </p>

              <p>
              
                <img src="./images/logo1.png" alt="" /> Lorem ipsum dolors
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
