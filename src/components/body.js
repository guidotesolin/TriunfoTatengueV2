import React from "react";
import "./body.css";
import { Container } from "react-bootstrap";
import { HashRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from "./Pages/homeView";
import Agrupacion from "./Pages/agrupacionView";
import Propuestas from "./Pages/propuestasView";
import Prensa from "./Pages/prensaView";
import Opinion from "./Pages/opinionView";
import Contacto from "./Pages/contactoView";
import NotFound from "./NotFound/404";
// Propuestas
import Estatuto from "../components/Propuestas/estatutoView";
import Protocolo from "../components/Propuestas/protocoloView";

export default function BodyPage() {
  return (
    <Container id="divBody">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/agrupacion" component={Agrupacion} />
          <Route path="/propuestas" component={Propuestas} />
          <Route path="/prensa" component={Prensa} />
          <Route path="/opinion" component={Opinion} />
          <Route path="/contacto" component={Contacto} />
          {/*Propuestas */}
          <Route path="/propuestas_estatuto" component={Estatuto} />
          <Route path="/propuestas_protocolo" component={Protocolo} />

          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </Container>
  );
}
