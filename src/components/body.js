import React from "react";
import Container from "react-bootstrap/Container";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/homeView";

import "./body.css";

export default function BodyPage() {
  return (
    <Container id="divBody">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </Container>
  );
}
