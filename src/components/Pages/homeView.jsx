import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "../../assets/styles/homeViewStyles";
import "../body.css";
import Card from "../utils/imageCardView";
export default function Homepage() {
  const classes = styles();

  return (
    <Grid
      container
      style={{ justifyContent: "center" }}
      alignItems="center"
      className={classes.containerTab}
      direction="column"
      justify="center"
      wrap="nowrap"
    >
      <Grid item className={classes.gridElement}>
        <Typography className={classes.tituloSeccion}>
          TRIUNFO TATENGUE
        </Typography>
      </Grid>
      <Grid item className={classes.gridElement} style={{ width: "80%" }}>
        <div class="container">
          <iframe
            src="https://www.youtube.com/embed/KeinW5M6XfA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Unión, Unidos"
            class="responsive-iframe"
          ></iframe>
        </div>
      </Grid>
      <Grid item className={classes.gridElement}>
        <Typography className={classes.text}>DESTACADO</Typography>
      </Grid>
      <Grid item className={classes.gridElement}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item>
            <Card
              image={"https://i.imgur.com/R6m4ClE.jpg"}
              altImage={"Leopoldo Luque"}
              title={"Tribuna Leopoldo Luque"}
              description={
                "El día 17 de febrero presentamos una nota al club solicitando que la tribuna conocida popularmente como Cándido Pujato sea rebautizada como Leopoldo Jacinto Luque en honor a uno de los nombres que más alto ha dejado plantada nuestra bandera."
              }
              tag={"Propuesta"}
              url={"/propuestas_tribuna_leopoldo_luque"}
            />
          </Grid>
          <Grid item>
            <Card
              image={"https://i.imgur.com/iYWUGze.jpg"}
              altImage={"Eneas Cencha"}
              title={"Las inferiores y su importancia"}
              description={
                "En Triunfo Tatengue sabemos que las divisiones inferiores son el pilar de todos los clubes de futbol, por lo que consideramos que deben ser tomadas con mayor consideración desde el club, queremos que Unión sea un modelo para los demás equipos, como por ejemplo lo son Vélez, Lanús entre tantos otros."
              }
              tag={"Opinión"}
              url={"/opinion_las_inferiores_y_su_importancia"}
            />
          </Grid>
          <Grid item>
            <Card
              image={"https://i.imgur.com/rSDEWW9.jpg"}
              altImage={"Reforma estatuto"}
              title={"Nuestro ante proyecto para la reforma del estatuto"}
              description={
                "Es un trabajo hecho a conciencia, con muchas horas de estudio, consultando a profesionales y observando los Estatutos de instituciones prestigiosas y exitosas. Mantenemos la identidad que caracteriza al Club social y deportivo más importante de la región.En total trabajamos en 154 Artículos."
              }
              tag={"Propuesta"}
              url={"/propuestas_estatuto"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
