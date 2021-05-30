import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PowerControl from "./components/PowerControl";
import ColorControl from "./components/ColorControl";
import Logs from "./components/Logs";

import Navigation from "./components/Navigation";

export default function ControlRoot() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={PowerControl} path="/" exact />
        <Route component={ColorControl} path="/color" exact />
        <Route component={Logs} path="/log" exact />
      </Switch>
      <Navigation />
    </BrowserRouter>
  );
}
