import React from "react";
import { Grid, Typography } from "@material-ui/core";
import styles from "../../assets/styles/homeViewStyles";
import "../body.css";
import Card from "../utils/imageCardView";
import AgrupacionImage from "../../assets/images/img02.jpg";

export default function Homepage() {
  const classes = styles();

  return (
    <Grid
      container
      alignItems="center"
      className={classes.root}
      direction="column"
      justify="center"
      wrap="nowrap"
    >
      <Grid item className={classes.gridElement}>
        <Typography className={classes.tituloSeccion}>
          TRIUNFO TATENGUE
        </Typography>
      </Grid>

      <Grid item className={classes.videoGrid}>
        <div class="container">
          <iframe
            src="https://www.youtube.com/embed/KeinW5M6XfA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
              image={AgrupacionImage}
              altImage={"Agrupacion Triunfo Tatengue"}
              title={"Quienes somos"}
              description={
                "Somos la generacion que va a cambiar las reglas de juego de nuestra institucion. Somos un equipo donde nadie es imprescindible y todos cumplimos roles específicos en nuestra propuesta de Comisión directiva. No somos súbditos ni levantamanos del poder de turno."
              }
              tag={"Nosotros"}
              url={"/Agrupacion"}
            />
          </Grid>
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
              image={"https://i.imgur.com/5mBr2Lq.jpg"}
              altImage={"Leo Simonutti"}
              title={"Entrevista a Leo Simonutti en Asado con fútbol"}
              description={
                "Entrevista realizada al presidente de nuestra Agrupación el día 23 de agosto por LT9"
              }
              tag={"Prensa"}
              link={"https://www.youtube.com/watch?v=0n6opPfgXmg"}
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
          <Grid item>
            <Card
              image={"https://i.imgur.com/Q6LykHf.jpg"}
              altImage={"Gugnali y Simonutti"}
              title={
                "Reunión entre Gugnali y Triunfo Tatengue con ideas a futuro"
              }
              description={
                "Leo Simonutti, el presidente de la Agrupación Triunfo Tatengue, se reunió días atrás con el exentrenador de Unión, Claudio Gugnali, para seguir trabajando en conjunto"
              }
              tag={"Prensa"}
              link={
                "https://www.unosantafe.com.ar/union/reunion-gugnali-y-triunfo-tatengue-ideas-futuro-n2641685.html"
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
