import React, { useState } from "react";
import "./Page3.css";
import { useNavigate } from "react-router-dom";
function Page3() {
  const Navigation = useNavigate();

  const [isDivVisible, setDivVisibility] = useState(true);

  const hideDiv = () => {
    setDivVisibility(false);
  };
  const showDiv = () => {
    setDivVisibility(true);
    
  };
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
  
  return (
    <div className="maincont">
      <div className="mainnav">
        <button className="homebutton" onClick={() => Navigation("/")}>
          Home
        </button>

        <h1>CodeCom</h1>
        {isVisible &&  <div className="abouttext" > 
        <h2>vishwas</h2>
        <h2>vishwasverma23@gmail.com</h2>
        <h2>9506862942</h2>
        </div>}
        <button class="setting-btn" title="About" onClick={toggleVisibility}>
        {isVisible}
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
          <span class="bar bar1"></span>
        </button>
      </div>
      <div className="maincont2">
        <div className="mainname">Vishwas23a</div>
        <div className="mainbutton">
          <button className="but1" onClick={showDiv} >Java</button>
          <button className="but2" onClick={hideDiv}>C++</button>

          <button className="but3">React Js</button>

          <button className="but4">JavaScript</button>
        </div>
      </div>
      <div className="mainleft">
        <button className="but5">Member</button>
        <button className="but6"> Resources</button>
        <button className="but7"> Competition</button>
        <button className="but8">Video Call</button>
        
        {isDivVisible && (  <div className="message" id="java1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
         
          </p>
        </div>
        )}
        <di className="message">
          <p>skgxksbx</p>
        </di>

      </div>
    </div>
  );
}

export default Page3;
