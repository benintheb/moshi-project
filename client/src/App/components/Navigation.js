import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./styles/Navigation.module.scss";

import { PowerSettingsNew, Palette, ListAlt } from "@material-ui/icons";

export default function Controls() {
  const [selectedLink, setSelectedLink] = useState("powerLink");

  const handleClick = (e) => {
    setSelectedLink(e.target.id);
  };

  return (
    <div className={style.wrapper}>
      <div className={(style.powerDiv, style.tabs)}>
        <Link
          to="/"
          id="powerLink"
          className={
            selectedLink === "powerLink" ? style.selectedLink : style.iconDiv
          }
          onClick={handleClick}
        >
          <PowerSettingsNew className={(style.powerIcon, style.icons)} />
        </Link>
      </div>
      <div className={(style.colorDiv, style.tabs)}>
        <Link
          to="/color"
          id="colorLink"
          className={
            selectedLink === "colorLink" ? style.selectedLink : style.iconDiv
          }
          onClick={handleClick}
        >
          <Palette className={(style.colorIcon, style.icons)} />
        </Link>
      </div>
      <div className={(style.logDiv, style.tabs)}>
        <Link
          to="/log"
          id="logLink"
          className={
            selectedLink === "logLink" ? style.selectedLink : style.iconDiv
          }
          onClick={handleClick}
        >
          <ListAlt className={(style.logIcon, style.icons)} />
        </Link>
      </div>
    </div>
  );
}
