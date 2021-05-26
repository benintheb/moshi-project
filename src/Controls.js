import React, { useState, useEffect } from "react";

import Switches from "./Switches";

import logo from "./img/lighthouse.png";

import style from "./styles/Controls.module.scss";

export default function Controls() {
  return (
    <div className={style.wrapper}>
      <div className={style.controlPanel}>
        <div className={style.logoDiv}>
          <img className={style.logo} src={logo}></img>
        </div>
        <div className={style.titleDiv}>
          <b>
            <p className={style.title}>lighthouse</p>
          </b>
          <p className={style.name}>
            by
            <br /> 20152520
            <br /> 정성현
          </p>
        </div>
        <div className={style.switchDiv}>
          <Switches />
        </div>
      </div>
    </div>
  );
}
