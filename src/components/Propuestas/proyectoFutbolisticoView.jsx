import React from "react";
import styles from "../../assets/styles/generalPagesSyles";
import { Grid, Typography } from "@material-ui/core";
// Images
import Gugnali from "../../assets/images/Propuestas/futbol/gugnali.jpg";
import Roteta from "../../assets/images/Propuestas/futbol/roteta.jpg";
import Bottaniz from "../../assets/images/Propuestas/futbol/bottaniz.jpg";
import Equipo from "../../assets/images/Propuestas/futbol/equipo.jpg";
import Renoleta from "../../assets/images/Propuestas/futbol/Magnin.jpg";
import Predio from "../../assets/images/Propuestas/futbol/Predio.jpg";
// Components
// import ReactPlayer from "react-player";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";

export default function ProyectoFutbolistico() {
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
          PROYECTO FUTBOLISTICO
        </Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.imageResponsive}
          src="https://i.imgur.com/G1GC7Wt.jpg"
          alt="Proyecto futbolistico"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Hinchas y socios de nuestro querido <strong>UNIÓN</strong>: es un
          placer para nosotros presentarles esta estructura moderna, como existe
          y se trabaja con grandes éxitos en los Clubes de Europa, además con
          gente de reconocido profesionalismo y pertenencia en Union.
        </Typography>
      </Grid>
      <Grid item className={classes.centerGrid}>
        <img
          src={Equipo}
          alt="Proyecto futbolistico"
          className={classes.imageResponsive}
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Tenemos un proyecto futbolístico que tiene cuatro eslabones. El
          patrimonio del club, en el aspecto futbolístico, está dado en las
          canteras. Estos cuatro eslabones son:
          <ul>
            <li>
              <strong>Captación</strong> del jugador.
            </li>
            <li>
              <strong>Formación</strong>.
            </li>
            <li>
              <strong>Seguimiento</strong> durante toda la etapa de inferiores.
            </li>
            <li>
              <strong>Promoción</strong> de una cantidad por año al plantel
              profesional.
            </li>
          </ul>
        </Typography>
      </Grid>

      <Grid item className={classes.centerGrid}>
        <img
          src={Predio}
          alt="Gugnali y Simonutti"
          className={classes.imageResponsive}
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          El mundo se define entre compradores y vendedores. Nosotros tenemos
          que ser vendedores, fabricantes. El producto final tiene que ser un
          futbolista profesional talentoso que llegue a Primera División y que
          se pueda vender para capitalizar el club. Que esto se transforme en un
          círculo virtuoso para las otras disciplinas
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          <strong>Claudio Gugnali</strong> será nuestro Manager para el fútbol
          profesional, con su ya reconocida trayectoria internacional y amor por
          el Club, de una capacidad inigualable.
        </Typography>
      </Grid>

      <Grid item className={classes.centerText}>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FTriunfoTatengue%2Fvideos%2F817376852300556%2F&show_text=false&width=380&t=0"
          title="Claudio Gugnali"
          width="267"
          height="330"
          className={classes.facebookVideo}
          scrolling="no"
          frameborder="0"
          allowfullscreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          <strong>Lito Bottaniz</strong> sumándose a la Direccion de Scouting,
          gloria del Club, para detectar los mejores juveniles que formaremos en
          nuestras canteras, y además detectar los jugadores que podrían sumarse
          al plantel profesional.
        </Typography>
      </Grid>
      <Grid item className={classes.centerText}>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FTriunfoTatengue%2Fvideos%2F807176729987235%2F&show_text=false&width=380&t=0"
          title="Lito Bottaniz"
          width="267"
          height="330"
          className={classes.facebookVideo}
          scrolling="no"
          frameborder="0"
          allowfullscreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          <strong>Carlos "Cachito" Roteta</strong> como Director De Fútbol
          Amateur y Formativas, conocedor como pocos de nuestro fútbol, de
          amplia experiencia, formador de innumerable cantidad de talentos,
          Tatengue de la cuna, y que llamará a todos los ex jugadores e ídolos
          del Club, para sumarse al proyecto grande de este nuevo Union.
        </Typography>
      </Grid>

      <Grid item className={classes.centerText}>
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FTriunfoTatengue%2Fvideos%2F801861337185441%2F&show_text=false&width=380&t=0"
          title="Roteta"
          width="267"
          height="330"
          className={classes.facebookVideo}
          scrolling="no"
          frameborder="0"
          allowfullscreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          <strong>Eduardo "Renoleta" Magnin</strong> también se suma a nuestro
          proyecto futbolistico. Experiencia, Pertenencia y Trabajo. Conocedor
          como pocos de las inferiores de Club, formador de esta camada actual y
          uno de los grandes potenciadores del trabajo en inferiores retomará
          con su labor.
        </Typography>
      </Grid>
      <Grid item className={classes.centerGrid}>
        <img
          src={Renoleta}
          alt="Renoleta"
          className={classes.imageResponsive}
        />
      </Grid>
      <Grid item className={classes.centerText}>
        <Typography className={classes.textoDesarrollo}>
          Estamos convencidos que estamos en el camino correcto.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Compartimos un fragmento de la nota a nuestro presidente en SOL 91.5
          comentando un poco sobre esta estructura:
        </Typography>
      </Grid>
      <Grid item className={classes.centerText}>
        <iframe
          title="Simonutti en FM Sol"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fleonardo.simonutti%2Fvideos%2F10220454967626516%2F&show_text=false&width=267"
          width="267"
          height="476"
          className={classes.facebookVideo}
          scrolling="no"
          frameborder="0"
          allowfullscreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={6} sm={3}>
            <img src={Gugnali} alt="Gugnali" className={classes.imageGrid} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={Bottaniz} alt="Bottaniz" className={classes.imageGrid} />
          </Grid>
          <Grid item xs={6} sm={3}>
            <img src={Roteta} alt="Roteta" className={classes.imageGrid} />
          </Grid>
        </Grid>
      </Grid>

      <ShareInSocialMedia
        link="http://www.triunfotatengue.com.ar/#/propuestas_proyecto_futbolistico"
        title="Proyecto futbolistico"
      />
    </Grid>
  );
}
