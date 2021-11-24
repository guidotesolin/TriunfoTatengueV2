import React from "react";

import "./Footer.css";
import Logo from "../../assets/images/brandRed.png";
import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <div id="socialNetworks">
        <img
          src="https://tracker.metricool.com/c3po.jpg?hash=f895b9e9009eb95b494066069ad03605"
          alt="metricool tracker"
        />
        <Row id="networks">
          <a
            className="socialIcons"
            rel="noopener noreferrer"
            href="https://www.facebook.com/TriunfoTatengue"
            target="_blank"
          >
            <i className="fab fa-facebook-square" />
          </a>
        </Row>
        <Row id="networks">
          <a
            className="socialIcons"
            rel="noopener noreferrer"
            href="https://www.instagram.com/triunfotatengue"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
        </Row>
        <Row id="networks">
          <img
            src={Logo}
            width="50"
            className="d-inline-block align-top"
            alt="Logo TT"
            id="brandLogo"
          />
        </Row>
        <Row id="networks">
          <a
            className="socialIcons"
            rel="noopener noreferrer"
            href="https://www.twitter.com/TriunfoTatengue"
            target="_blank"
          >
            <i className="fab fa-twitter" />
          </a>
        </Row>
        <Row id="networks">
          <a
            className="socialIcons"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UC_3_g_ZA677mPetWdTTBhjA"
            target="_blank"
          >
            <i className="fab fa-youtube" />
          </a>
        </Row>
      </div>
      <div id="local">
        <i style={{ color: "#ef233c" }} class="fas fa-map-marker-alt"></i>
        <a
          rel="noopener noreferrer"
          href="https://goo.gl/maps/i7RL1tzttUh8A6nL6"
          target="_blank"
        >
          <p className="ubication">Bv Pellegrini 2998, Santa Fe</p>
        </a>
      </div>
    </div>
  );
}
