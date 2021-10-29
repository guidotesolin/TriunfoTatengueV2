import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "../../assets/styles/generalPagesSyles";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import AmnistiaFile from "../../assets/documents/Amnistia.pdf";

export default function Amnistia() {
  const classes = styles();
  const workerUrl =
    "https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js";
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item className={classes.centerText}>
        <Typography className={classes.tituloSeccion}>
          AMNISTÍA GENERAL SOCIETARIA
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          El día 30 de septiembre presentamos en Mesa de entradas del Club
          Atlético Unión un pedido formal para lograr una Amnistía General
          Societaria con el fin de que el Socio pueda sentirse respaldado de las
          difíciles épocas que la Sociedad tuvo que afrontar.
        </Typography>
      </Grid>
      <Grid item>
        <Worker workerUrl={workerUrl}>
          <Grid className={classes.pdfViewer}>
            <Viewer fileUrl={AmnistiaFile} />
          </Grid>
        </Worker>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Es una acción que si se lleva a cabo beneficia al Club en cuanto a la
          parte económica permitiendo fidelización del socio y también beneficia
          al Socio dandole un respaldo ante la situación atípica que estamos
          viviendo.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          La idea es que el socio que tuvo dificultades, ya sean económicas
          (bien conocidos son los efectos que la pandemia tuvo sobre el bolsillo
          de la gente) o logísticas (oficina de socios cerrada y baja de uno de
          los cobradores a domicilio) pueda ponerse al día conservando su
          antigüedad mediante un plan de pagos que servirían como oxigeno para
          las arcas del Club.
        </Typography>
      </Grid>
      <ShareInSocialMedia
        link="http://www.triunfotatengue.com.ar/#/amnistia"
        title="Amnistía General Societaria"
      />
    </Grid>
  );
}
