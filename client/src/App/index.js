import React from "react";

import ControlRoot from "./ControlRoot";

import logo from "../img/lighthouse.png";

import "./styles/index.css";

export default function App() {
  return (
    <div className="appWrapper">
      <div className="appContent">
        <div className="logoDiv">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="titleDiv">
          <b>
            <p className="title">LIGHTHOUSE</p>
          </b>
        </div>
        <div className="controlDiv">
          <ControlRoot />
        </div>
      </div>
    </div>
  );
}
