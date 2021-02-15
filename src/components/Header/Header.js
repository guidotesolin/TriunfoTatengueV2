import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/brandRed.png";

import "./Header.css";

export default function Header() {
  return (
    <div id="divNavbar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand py-0>
          <Nav.Link class="navbarImage">
            <Link to="/" class="navbarImage">
              <img
                src={Logo}
                width="50"
                className="d-inline-block align-top"
                alt="Logo TT"
                id="BrandLogo"
              />
            </Link>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to="/" class="navbarElement">
              Inicio
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/agrupacion" class="navbarElement">
              Agrupación
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/propuestas" class="navbarElement">
              Propuestas
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/prensa" class="navbarElement">
              Prensa
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/opinion" class="navbarElement">
              Opinión
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contacto" class="navbarElement">
              Contacto
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
