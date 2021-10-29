import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/homeViewStyles";
import "../body.css";
import Card from "../utils/imageCardView";
import AgrupacionImage from "../../assets/images/img02.jpg";
import Asociate from "../../assets/images/asociate.jpg";

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
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid item>
            <Card
              image="https://i.imgur.com/6kTGGt0.jpg"
              altImage="Proyecto futbolistico"
              title="Palcos Norte"
              description={`Ubicados sobre Cándido Pujato se proyectan 88 palcos para 10 personas cada uno, contarán con un equipamiento de frigobar, TV LED, mesada de cocina y estará equipado con las butacas teatro. También estarán los Palcos VIP que contarán con sanitarios de uso exclusivo.`}
              tag="Propuesta"
              url={"/palcos_norte"}
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/EhPxwV0.jpg"
              altImage="Leo Simonutti en Aire de Santa Fe"
              title={`Simonutti: "Quiero ser presidente de Unión porque me veo reflejado en los hinchas"`}
              description={`Entrevista completa al candidato de Triunfo Tatengue en Aire de Santa Fe. "Unión tiene que ser un club moderno y profesional con personal con sentido de pertenencia".`}
              tag="Prensa"
              link="https://www.youtube.com/watch?v=MUAC7OQrKQ4"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/W59zMGO.jpg"
              altImage="Socios"
              title={`Triunfo Tatengue le pidió a Unión una anmistía de socios para regularizar su situación`}
              description="En una nota presentada en Unión y que lleva la firma de su presidente, Leonardo Simonutti, Triunfo Tatengue solicita una anmistía a socios por la pandemia."
              tag="Propuesta"
              link="https://www.unosantafe.com.ar/union/triunfo-tatengue-le-pidio-union-anmistia-socios-n2691963.html"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/h4tVSMA.jpg"
              altImage="Proyecto futbolistico"
              title="¡Bienvenido Pepe!"
              description={`José Antonio "Pepe" Castro se sumará a nuestro proyecto futbolistico en el puesto de Asesor Presidencial cumpliendo la función de Embajador deportivo en el mundo, nexo y voz en los medios de comunicación y también servirá de apoyo para el área de scouting. El máximo goleador del inolvidable ascenso de 1989 e ídolo de la institución se suma a Gugnali, Roteta, Bottaniz y Magnín en la busqueda de un Unión más grande.`}
              tag="Propuesta"
              url={"/propuestas_proyecto_futbolistico"}
            />
          </Grid>

          <Grid item>
            <Card
              image="https://i.imgur.com/rSDEWW9.jpg"
              altImage="Reforma estatuto"
              title="Nuestro ante proyecto para la reforma del estatuto"
              description="Es un trabajo hecho a conciencia, con muchas horas de estudio, consultando a profesionales y observando los Estatutos de instituciones prestigiosas y exitosas. Mantenemos la identidad que caracteriza al Club social y deportivo más importante de la región. En total trabajamos en 154 Artículos que abarcan toda la vida social e institucional del Club."
              tag="Propuesta"
              url="/propuestas_estatuto"
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
              image="https://i.imgur.com/0VE603J.jpg"
              altImage="Leo Simonutti"
              title={`"Unión necesita un proyecto a largo plazo"`}
              description="Leonardo Simonutti juega a fondo para ser presidente de Unión. El esperancino, especialista en desarrollo y expansión de las energías renovables y convencionales, lidera la agrupación Triunfo Tatengue, y se anima a disputarle la hegemonía política a Luis Spahn."
              tag="Prensa"
              link="https://www.ellitoral.com/index.php/id_um/297992-simonutti-union-necesita-un-proyecto-a-largo-plazo-una-propuesta-diferente-actualidad-tatengue-una-propuesta-diferente.html"
            />
          </Grid>
          <Grid item>
            <Card
              image={AgrupacionImage}
              altImage="Agrupacion Triunfo Tatengue"
              title="Quienes somos"
              description="Somos la generacion que va a cambiar las reglas de juego de nuestra institucion. Somos un equipo donde nadie es imprescindible y todos cumplimos roles específicos en nuestra propuesta de Comisión directiva. No somos súbditos ni levantamanos del poder de turno."
              tag="Nosotros"
              url="/Agrupacion"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/R6m4ClE.jpg"
              altImage="Leopoldo Luque"
              title="Tribuna Leopoldo Luque"
              description="El día 17 de febrero presentamos una nota a la Comisión Directiva del Club solicitando que la tribuna conocida popularmente como Cándido Pujato sea rebautizada como Leopoldo Jacinto Luque en honor a uno de los campeones que más alto ha dejado plantada nuestra bandera en el mundo."
              tag="Propuesta"
              url="/propuestas_tribuna_leopoldo_luque"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.gridElement}
        onClick={() => window.scrollTo(0, 0)}
      >
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
