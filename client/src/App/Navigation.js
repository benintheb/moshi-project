import React, { useState } from "react";

import style from "./styles/Navigation.module.scss";

import { PowerSettingsNew, Palette, ListAlt } from "@material-ui/icons";

export default function Navigation(props) {
  const { selectedTab, handleTabChange } = props;
  const [selectedLink, setSelectedLink] = useState("powerLink");

  const handleClick = (e) => {
    handleTabChange(e.target.id);
  };

  return (
    <div className={style.wrapper}>
      <div className={(style.powerDiv, style.tabs)}>
        <div
          id="power"
          className={
            selectedTab === "power" ? style.selectedTab : style.iconDiv
          }
          onClick={handleClick}
        >
          <PowerSettingsNew className={(style.powerIcon, style.icons)} />
        </div>
      </div>
      <div className={(style.colorDiv, style.tabs)}>
        <div
          id="color"
          className={
            selectedTab === "color" ? style.selectedTab : style.iconDiv
          }
          onClick={handleClick}
        >
          <Palette className={(style.colorIcon, style.icons)} />
        </div>
      </div>
      <div className={(style.logDiv, style.tabs)}>
        <div
          id="log"
          className={selectedTab === "log" ? style.selectedTab : style.iconDiv}
          onClick={handleClick}
        >
          <ListAlt className={(style.logIcon, style.icons)} />
        </div>
      </div>
    </div>
  );
}
