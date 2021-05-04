import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "../../assets/styles/generalPagesSyles";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";

export default function TribunaLeopoldoLuque() {
  const classes = styles();
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
          TRIBUNA LEOPOLDO JACINTO LUQUE
        </Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.imageResponsive}
          src="https://i.imgur.com/R6m4ClE.jpg"
          alt="Leopoldo jacinto luque"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          El día 17 de febrero presentamos una nota al club solicitando que la
          tribuna conocida popularmente como Cándido Pujato sea rebautizada como
          Leopoldo Jacinto Luque en honor a uno de los nombres que más alto ha
          dejado plantada nuestra bandera.
        </Typography>
      </Grid>
      <Grid item>
        <img
          src="https://i.imgur.com/7G46qBk.jpg"
          alt="Nota presentada al club"
          className={classes.imageResponsive}
        />
      </Grid>
      <Grid item>
        <Typography className={classes.textoDesarrollo}>
          La remodelación de este sector de la cancha fue posible en 1975
          gracias a la transferencia de Luque a River por una cifra record en el
          fútbol de aquel entonces.
        </Typography>
      </Grid>
      <Grid item>
        <blockquote class="twitter-tweet">
          <p lang="es" dir="ltr">
            📃 Convenio de transferencia entre
            <a href="https://twitter.com/RiverPlate?ref_src=twsrc%5Etfw">
              @RiverPlate
            </a>
            y
            <a href="https://twitter.com/clubaunion?ref_src=twsrc%5Etfw">
              @clubaunion
            </a>
            por el pase de Leopoldo Jacinto Luque (1975). 🔙
            <br />
            🗃: Archivo Enrique Zanni{" "}
            <a href="https://t.co/4VECwB9Gvp">pic.twitter.com/4VECwB9Gvp</a>
          </p>
          &mdash; Museo River (@MuseoRiver){" "}
          <a href="https://twitter.com/MuseoRiver/status/1361433138157780994?ref_src=twsrc%5Etfw">
            February 15, 2021
          </a>
        </blockquote>
      </Grid>
      <Grid item>
        <Typography className={classes.textoDesarrollo}>
          Es por eso y muchas cosas más que deseamos que un sector de nuestro
          estadio porté el nombre de uno de los máximos idolos de nuestra
          historia. Vuela alto campeón. Nunca te olvidaremos.
        </Typography>
      </Grid>
      <Grid item>
        <img
          src="https://images.ole.com.ar/2021/02/15/K1Iycm1eF_1256x620__1.jpg"
          alt="Luque"
          className={classes.imageResponsive}
        />
      </Grid>
      <ShareInSocialMedia
        link="http://www.triunfotatengue.com.ar/#/propuestas_tribuna_leopoldo_luque"
        title="Tribuna Leopoldo Jacinto Luque"
      />
    </Grid>
  );
}
