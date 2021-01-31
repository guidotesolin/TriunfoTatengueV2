import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "../../assets/styles/propuestasPagesSyles";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import ProtocoloFile from "../../assets/documents/Protocolo.pdf";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";

export default function ProtocoloView() {
  const classes = styles();
  const workerUrl =
    "https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js";

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      wrap="nowrap"
    >
      <Grid item className={classes.centerText}>
        <Typography className={classes.tituloSeccion}>
          PROTOCOLO PARA LA REALIZACIÓN DE LA ASAMBLEA GENERAL ORDINARIA
        </Typography>
      </Grid>
      <Grid item>
        <img
          src="https://i.imgur.com/gDLdxV8.jpg"
          alt="Asamblea 2021"
          className={classes.asambleaImages}
        />
      </Grid>
      <Grid item>
        <Typography className={classes.textoDesarrollo}>
          El objetivo del presente es la propuesta de la Agrupación Triunfo
          Tatengue con recomendaciones generales para la realización de la
          ASAMBLEA GENERAL, en un ámbito de seguridad colectiva, siguiendo las
          indicaciones desarrolladas.
        </Typography>
      </Grid>
      <Grid item>
        <Worker workerUrl={workerUrl}>
          <Grid className={classes.pdfViewer}>
            <Viewer fileUrl={ProtocoloFile} />
          </Grid>
        </Worker>
      </Grid>
      <Grid item>
        <Typography className={classes.textoDesarrollo}>
          El protocolo junto con la correspondiente nota ya ha sido presentada
          en el club el día 4 de enero de 2021 y al día de hoy todavía no hemos
          tenido respuesta alguna de parte de la dirigencia.
        </Typography>
      </Grid>
      <Grid item>
        <img
          src="https://i.imgur.com/YdQErCW.jpg"
          alt="Nota presentada al club"
          className={classes.asambleaImages}
        />
      </Grid>
      <Grid item style={{ textAlign: "center" }}>
        <ShareInSocialMedia
          link="http://www.triunfotatengue.com.ar/#/propuestas_protocolo"
          title="Protocolo para la realización de la asamblea"
        />
      </Grid>
    </Grid>
  );
}
