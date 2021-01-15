import React from "react";

import "./Footer.css";
import Logo from "../../assets/images/brandWhite.png";
import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div id="socialNetworks">
      <Row id="networks">
        <a
          class="socialIcons"
          rel="noopener noreferrer"
          href="https://www.facebook.com/TriunfoTatengue"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
        </a>
      </Row>
      <Row id="networks">
        <a
          class="socialIcons"
          rel="noopener noreferrer"
          href="https://www.instagram.com/triunfotatengue"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
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
          class="socialIcons"
          rel="noopener noreferrer"
          href="https://www.twitter.com/TriunfoTatengue"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </Row>
      <Row id="networks">
        <a
          class="socialIcons"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UC_3_g_ZA677mPetWdTTBhjA"
          target="_blank"
        >
          <i class="fab fa-youtube"></i>
        </a>
      </Row>
    </div>
  );
}
