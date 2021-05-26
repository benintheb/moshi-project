import React, { useState } from "react";

import style from "./styles/Controls.module.scss";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Switches() {
  const [switch1, setSwitch1] = useState(false);

  return (
    <>
      <div className={style.switch}>
        <FormControlLabel
          control={
            <Switch
              checked={switch1}
              onChange={() => setSwitch1(!switch1)}
              name="test"
              color="primary"
            />
          }
          label="test1"
          labelPlacement="bottom"
        />
      </div>
      <div className={style.switch}>
        <FormControlLabel
          control={
            <Switch
              checked={switch1}
              onChange={() => setSwitch1(!switch1)}
              name="test"
              color="primary"
            />
          }
          label="test1"
          labelPlacement="bottom"
        />
      </div>
    </>
  );
}
