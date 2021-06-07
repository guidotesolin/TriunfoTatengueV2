import React from "react";

import "./Footer.css";
import Logo from "../../assets/images/brandRed.png";
import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div id="socialNetworks">
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
  );
}
