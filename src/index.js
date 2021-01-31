import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "./assets/fonts/Futura.otf";
import "./assets/fonts/HelveticaNeueBold.otf";
import "./assets/fonts/HelveticaNeueLight.otf";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
