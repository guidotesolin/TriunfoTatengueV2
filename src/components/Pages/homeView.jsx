import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/homeViewStyles";
import "../body.css";
import Card from "../utils/imageCardView";
import AgrupacionImage from "../../assets/images/img02.jpg";
import Asociate from "../../assets/images/asociate.jpg";
import Nota from "../../assets/images/Simonutti.jpg";

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
        <div className="container">
          <iframe
            src="https://www.youtube.com/embed/KeinW5M6XfA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Unión, Unidos"
            className="responsive-iframe"
          ></iframe>
        </div>
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
              image="https://static.ellitoral.com/um/fotos/376455_simonutti_union.jpg"
              altImage="Leonardo Simonutti"
              title={`"Es una oportunidad muy linda y estamos preparados para grandes cosas"`}
              description="En Triunfo Tatengue desde hace un tiempo estamos proponiendo cosas que sean en beneficio del club. Estamos siempre pensando para adelante sin dejar de mirar el presente que tiene la institución"
              tag="Prensa"
              link="https://soundcloud.com/triunfo-tatengue/simonutti-fm-sol-30-jul"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/M14kVr8.jpg"
              altImage="Lito Bottaniz"
              title={`"Es una oportunidad muy linda y estamos preparados para grandes cosas"`}
              description="Nota a Lito Bottaniz en Café con Fútbol"
              tag="Prensa"
              link="https://www.youtube.com/watch?v=UJ9qLTkeikw"
            />
          </Grid>
          <Grid item>
            <Card
              image={Nota}
              altImage="Leo Simonutti"
              title={`"Tenemos que confrontar proyectos, no personas. Nuestro proyecto esta claro y a la vista."`}
              description="Nota televisiva en el programa La Mesa Deportiva realizada al presidente de nuestra Agrupación el día 22 de junio"
              tag="Prensa"
              link="https://www.youtube.com/watch?v=DPCoBoI4yTQ"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/Waj2cfN.jpg"
              altImage="Proyecto futbolistico"
              title={`¡Bienvenido Renoleta!`}
              description={`Eduardo "Renoleta" Magnín también se suma a nuestro proyecto futbolistico. Experiencia, Pertenencia y Trabajo. Conocedor como pocos de las inferiores de Club, formador de esta camada actual y uno de los grandes potenciadores del trabajo en inferiores se une a nuestra estructura futbolistica.`}
              tag="Propuesta"
              url={"/propuestas_proyecto_futbolistico"}
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/0P53ZTR.jpg"
              altImage="Leonardo Simonutti"
              title="La historia del otro ferretero que quiere ser presidente de Unión"
              description="“Grondona tenía una ferretería y fue presidente de la Afa; yo tengo una ferretería y quiero ser presidente de Unión”, dice este esperancino que ya tiene designado el manager, el coordinador y el buscador de talentos si el socio lo elige. Su plan para entrar a Unión sin necesidad de una chequera pero con resto económico."
              tag="Prensa"
              link="https://www.ellitoral.com/index.php/id_um/299476-la-historia-del-otro-ferretero-que-quiere-ser-presidente-de-union-leonardo-simonutti-quien-es-que-quiere-para-el-club-como-piensa-actualidad-tatengue-leonardo-simonutti.html"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/1g9YeuP.jpg"
              altImage="Leo Simonutti"
              title={`"Unión necesita un proyecto a largo plazo"`}
              description="Leonardo Simonutti juega a fondo para ser presidente de Unión. El esperancino, especialista en desarrollo y expansión de las energías renovables y convencionales, lidera la agrupación Triunfo Tatengue, y se anima a disputarle la hegemonía política a Luis Spahn. El futuro del Tate es algo que lo obsesiona y lo deja en claro permanentemente."
              tag="Prensa"
              link="https://www.ellitoral.com/index.php/id_um/297992-simonutti-union-necesita-un-proyecto-a-largo-plazo-una-propuesta-diferente-actualidad-tatengue-una-propuesta-diferente.html"
            />
          </Grid>
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
      <Grid item className={classes.gridElement}>
        <Link to={"/asociate"} style={{ textDecoration: "none" }}>
          <img
            src={Asociate}
            alt="Asociate!"
            className={classes.imageResponsive}
          />
        </Link>
      </Grid>
    </Grid>
  );
}
