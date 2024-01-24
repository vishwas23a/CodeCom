import React, { useState } from "react";
import "./Page3.css";
import { Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Page3() {
  const Navigation = useNavigate();

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
        {isVisible && (
          <div className="abouttext">
            <h2>vishwas</h2>
            <h2>vishwasverma23@gmail.com</h2>
            <h2>9506862942</h2>
          </div>
        )}
        <button className="setting-btn" title="About" onClick={toggleVisibility}>
          {isVisible}
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar1"></span>
        </button>
      </div>
      <div className="maincont2">
        <div className="mainname">Vishwas23a</div>
        <div className="mainbutton">
          <NavLink to="/Page3">
            <button className="but1">Java</button>
          </NavLink>
          <NavLink to="/Page3/Cplus">
            <button className="but2">C++</button>
          </NavLink>

          <NavLink to="/Page3/Reactjss">
            <button className="but3">React Js</button>
          </NavLink>

          <NavLink to="/Page3/JavaScr">
            <button className="but4">JavaScript</button>
          </NavLink>
        </div>
        <Outlet />
      </div>
      <div className="mainleft">
        <NavLink to="/Page3/Member">
          <button className="but5">Member</button>
        </NavLink>

        <NavLink to="/Page3/Resources">
          <button className="but6"> Resources</button>
        </NavLink>
        <NavLink to="/Page3/Competition">
          <button className="but7"> Competition</button>
        </NavLink>
        <NavLink to="/Page3/Videocall">
          <button className="but8">Video Call</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Page3;
