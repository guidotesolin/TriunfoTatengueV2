import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/homeViewStyles";
import "../body.css";
import Card from "../utils/imageCardView";
import Asociate from "../../assets/images/asociate.jpg";
import Gracias from "../../assets/images/Gracias.jpg";

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
        <Typography className={classes.bodyText}>Antes que nada, felicitar a la lista “Todos por Unión” por el triunfo eleccionario y que sea lo mejor para el Socio y la Institución.</Typography>
        <Typography className={classes.bodyText}>Agradecimiento absoluto a los que nos eligieron en su sufragio y a las personas que integran este espacio por el tiempo y esfuerzo dedicado para ser una alternativa real para Unión </Typography>
        <Typography className={classes.bodyText}>Estamos a plena disposición para que nuestros Proyectos se puedan llevar a cabo en el Club</Typography>
        <Typography className={classes.bodyText}>¡Gracias, Unionistas!</Typography>
      </Grid>
      <Grid item className={classes.gridElement}>
        <img
          src={Gracias}
          alt="Gracias"
          className={classes.imageResponsive}
        />
      </Grid>

      <Grid item className={classes.gridElement}>
        <Grid
          container
          direction="row"
          justify="center"
          spacing={2}
          className={classes.cardsGrid}
        >
          <Grid item>
            <Card
              image="https://i.imgur.com/9nxxprY.jpg"
              altImage="Lito Bottaniz"
              title="La figura del scouting profesional: un ítem fundamental en el fútbol de Unión"
              description={`El ex-jugador de Unión dialogó con SOL 91.5 sobre su incorporación a la lista de Triunfo Tatengue que participará de las próximas elecciones del Club.`}
              tag="Prensa"
              link="https://www.sol915.com.ar/lito-bottaniz-hay-un-proyecto-con-una-reestructuracion-importante-en-la-tatenguita/"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/gX37PzX.jpg"
              altImage="Proyecto futbolistico"
              title="¡Bienvenido Loco!"
              description={`El ultimo ídolo se suma a nuestro equipo de formativas liderado por Cacho Roteta. Darle el lugar que se merecen los ídolos que tantas alegrías nos dieron es una de nuestras premisas. Inculcar pertenencia desde las inferiores es algo fundamental.`}
              tag="Propuesta"
              url={"/propuestas_proyecto_futbolistico"}
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/uIiayHU.jpg"
              altImage="Simonutti"
              title="Pensando el Unión de los próximos 30 años"
              description={`Simonutti encabeza un proyecto planificado que busca el crecimiento integral de Unión sostenido en el tiempo. Trabajamos y nos capacitamos para ser un gobierno con un proyecto claro, transparente y por el bien del club.`}
              tag="Prensa"
              link="https://www.ellitoral.com/index.php/id_um/335976-leo-simonutti-piensa-el-union-de-los-proximos-30-anos-2022-el-ano-en-que-el-club-debe-despegar-deportes-el-club-debe-despegar.html"
            />

          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/cQBxkCB.jpg"
              altImage="Proyecto futbolistico"
              title="¡Bienvenido Profe!"
              description={`Raul Lozada se suma a nuestra Agrupación como Coordinador General de Disciplinas Deportivas. Un apellido con mucha historia y pertenencia Tatengue, valores claves para el Crecimiento Institucional.`}
              tag="Propuesta"
              link="https://twitter.com/TriunfoTatengue/status/1471623395536216066"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/pgWzmKp.jpg"
              altImage="Gira europea"
              title="Marca UNIÓN en Europa: Resumen de la gira por España, Francia e Italia"
              description={`Con el fin de relacionarnos con la elite del futbol mundial, además de capacitarnos, aprender y evolucionar personal e institucionalmente, visitamos Clubes, nos reunimos con dirigentes, ex futbolistas, periodistas y socios de nuestro Union de Santa Fe.`}
              tag="Opinión"
              url={"/resumen_gira_europea"}
            />
          </Grid>
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
              image="https://i.imgur.com/Pu5La9f.jpg"
              altImage="Leopoldo Luque"
              title="Tribuna Leopoldo Luque"
              description="El día 17 de febrero presentamos una nota a la Comisión Directiva del Club solicitando que la tribuna conocida popularmente como Cándido Pujato sea rebautizada como Leopoldo Jacinto Luque en honor a uno de los campeones que más alto ha dejado plantada nuestra bandera en el mundo."
              tag="Propuesta"
              url="/propuestas_tribuna_leopoldo_luque"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/lPyhqIE.jpg"
              altImage="Reforma estatuto"
              title="Nuestro ante proyecto para la reforma del estatuto"
              description="Es un trabajo hecho a conciencia, con muchas horas de estudio, consultando a profesionales y observando los Estatutos de instituciones prestigiosas y exitosas. Mantenemos la identidad que caracteriza al Club social y deportivo más importante de la región. En total trabajamos en 154 Artículos que abarcan toda la vida social e institucional del Club."
              tag="Propuesta"
              url="/propuestas_estatuto"
            />
          </Grid>
          <Grid item>
            <Card
              image="https://i.imgur.com/hugQsGc.jpg"
              altImage="Leonardo Simonutti"
              title="La historia del otro ferretero que quiere ser presidente de Unión"
              description="“Grondona tenía una ferretería y fue presidente de la Afa; yo tengo una ferretería y quiero ser presidente de Unión”, dice este esperancino que ya tiene designado el manager, el coordinador y el buscador de talentos si el socio lo elige."
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
              image="https://i.imgur.com/kl8gC9m.jpg"
              altImage="Agrupacion Triunfo Tatengue"
              title="Quienes somos"
              description="Somos la generacion que va a cambiar las reglas de juego de nuestra institucion. Somos un equipo donde nadie es imprescindible y todos cumplimos roles específicos en nuestra propuesta de Comisión directiva. No somos súbditos ni levantamanos del poder de turno."
              tag="Nosotros"
              url="/Agrupacion"
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
