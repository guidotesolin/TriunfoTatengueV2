import React from "react";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import styles from "../../assets/styles/propuestasPagesSyles";

export default function Protocolo() {
  const classes = styles();

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Typography className={classes.tituloSeccion}>
          Protocolo para la realización de la asamblea general ordinaria
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
        <Typography>
          El objetivo del presente es la propuesta de la Agrupación Triunfo
          Tatengue con recomendaciones generales para la realización de la
          ASAMBLEA GENERAL, en un ámbito de seguridad colectiva, siguiendo las
          indicaciones desarrolladas.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Esta nota ya ha sido presentada en el club el día 4 de enero de 2021 y
          al día de hoy todavía no hemos tenido respuesta alguna de parte de la
          dirigencia.
        </Typography>
      </Grid>
      <Grid item>
        <img
          src="https://i.imgur.com/YdQErCW.jpg"
          alt="Nota presentada al club"
          className={classes.asambleaImages}
        />
      </Grid>

      <Grid item>
        <Button className={classes.downloadButton}>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            // href={linkEstatuto}
            className={classes.textButton}
          >
            Descargar proyecto completo
          </Link>
        </Button>
      </Grid>
    </Grid>
  );
}
