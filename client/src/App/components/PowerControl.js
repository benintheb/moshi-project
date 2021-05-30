import React, { useState } from "react";

import style from "./styles/PowerControl.module.scss";

import lightOff from "./img/lightOff.png";
import lightOn from "./img/lightOn.png";
import sensorOff from "./img/sensorOff.png";
import sensorOn from "./img/sensorOn.png";

export default function PowerControl() {
  const [isLightOn, setIsLightOn] = useState(false);
  const [isSensorOn, setIsSensorOn] = useState(false);

  const handleLightClick = () => {
    setIsLightOn(!isLightOn);
  };

  const handleSensorClick = () => {
    setIsSensorOn(!isSensorOn);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.lightSwitch}>
        <img
          className={style.lightIcon}
          src={isLightOn ? lightOn : lightOff}
          alt="light"
          onClick={handleLightClick}
        ></img>
      </div>
      <div className={style.sensorSwitch}>
        <img
          className={style.sensorIcon}
          src={isSensorOn ? sensorOn : sensorOff}
          alt="sensor"
          onClick={handleSensorClick}
        ></img>
      </div>
    </div>
  );
}
