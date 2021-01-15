import React from "react";

import "./404.css";

export default function NotFound() {
  return (
    <div class="wrapper">
      <div class="hijo">
        <h1 id="Titulo">
          <strong>404 | NOT FOUND</strong>
        </h1>
        <br />
        <h4 id="Epigrafe">El enlace solicitado no existe.</h4>
        <br />
        <h4>
          <a href="https://www.triunfotatengue.com.ar/">Volver al inicio</a>
        </h4>
      </div>
    </div>
  );
}
