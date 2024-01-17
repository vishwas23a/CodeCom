import React from "react";
import "./Page3.css";
import { useNavigate } from "react-router-dom";
function Page3() {
  const Navigation = useNavigate();
  return (
    <div className="maincont">
      <div className="mainnav">
        <button className="homebutton" onClick={() => Navigation("/")}>
          Home
        </button>

        <h1>CodeCom</h1>
        <button class="setting-btn" title="About">
          <span class="bar bar1"></span>
          <span class="bar bar2"></span>
          <span class="bar bar1"></span>
        </button>
      </div>
      <div className="maincont2">
        <div className="mainname">Vishwas23a</div>
        <div className="mainbutton">
          <button className="but1">Java</button>
          <button className="but2">C++</button>

          <button className="but3">React Js</button>

          <button className="but4">JavaScript</button>
        </div>
      </div>
      <div className="mainleft">
        <button className="but5">Member</button>
        <button className="but6"> Resources</button>
        <button className="but7"> Competition</button>
        <button className="but8">Video Call</button>
        <div className="message">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            ipsam totam deleniti natus doloribus culpa est dolor error
            accusantium? Necessitatibus nobis vitae, officia minima nulla sequi?
            Laboriosam doloribus ipsam modi.s
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            ipsam totam deleniti natus doloribus culpa est dolor error
            accusantium? Necessitatibus nobis vitae, officia minima nulla sequi?
            Laboriosam doloribus ipsam modi.s
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
