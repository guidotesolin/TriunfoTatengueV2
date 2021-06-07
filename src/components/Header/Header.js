import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/brandRed.png";

import "./Header.css";

export default function Header() {
  return (
    <div id="divNavbar">
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand >
          <Nav.Link className="navbarImage">
            <Link to="/" className="navbarImage">
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
            <Link to="/" className="navbarElement">
              Inicio
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/agrupacion" className="navbarElement">
              Agrupación
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/propuestas" className="navbarElement">
              Propuestas
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/prensa" className="navbarElement">
              Prensa
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/opinion" className="navbarElement">
              Opinión
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contacto" className="navbarElement">
              Contacto
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
