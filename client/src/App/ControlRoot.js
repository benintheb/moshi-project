import React, { useState, useEffect } from "react";
import axios from "axios";

import Navigation from "./Navigation";

import style from "./styles/ControlRoot.module.scss";

import lightOff from "./img/lightOff.png";
import lightOn from "./img/lightOn.png";
import sensorOff from "./img/sensorOff.png";
import sensorOn from "./img/sensorOn.png";

export default function ControlRoot() {
  const [selectedTab, setSelectedTab] = useState("power");

  const [isLightOn, setIsLightOn] = useState(false);
  const [isSensorOn, setIsSensorOn] = useState(false);

  const handleLightClick = () => {
    setIsLightOn(!isLightOn);
  };

  const handleSensorClick = () => {
    isSensorOn
      ? axios.post("http://localhost:5000/api/sensor/off")
      : axios.post("http://localhost:5000/api/sensor/on");

    setIsSensorOn(!isSensorOn);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // check selectedTab
  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  return (
    <div className={style.wrapper}>
      <div className={style.tabDiv}>
        {selectedTab === "power" ? (
          <div className={style.powerDiv}>
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
        ) : null}
        {selectedTab === "color" ? <div>color</div> : null}
        {selectedTab === "log" ? <div>log</div> : null}
      </div>
      <Navigation selectedTab={selectedTab} handleTabChange={handleTabChange} />
    </div>
  );
}
