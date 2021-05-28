import React from "react";
import { Link } from "react-router-dom";

import style from "./styles/Navigation.module.scss";

import { PowerSettingsNew, Palette, ListAlt } from "@material-ui/icons";

export default function Controls() {
  return (
    <div className={style.wrapper}>
      <div className={(style.powerDiv, style.tabs)}>
        <Link to="/power" className={style.iconDiv}>
          <PowerSettingsNew className={(style.powerIcon, style.icons)} />
        </Link>
      </div>
      <div className={(style.colorDiv, style.tabs)}>
        <Link to="/color" className={style.iconDiv}>
          <Palette className={(style.colorIcon, style.icons)} />
        </Link>
      </div>
      <div className={(style.logDiv, style.tabs)}>
        <Link to="/log" className={style.iconDiv}>
          <ListAlt className={(style.logIcon, style.icons)} />
        </Link>
      </div>
    </div>
  );
}
