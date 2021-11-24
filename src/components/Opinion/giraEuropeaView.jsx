import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import Carousel from "react-bootstrap/Carousel";
import styles from "../../assets/styles/generalPagesSyles";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";
// Portada
import Portada from "../../assets/images/Opinion/europa/portada.jpg";
// Rayo vallecano
import Vallecano01 from "../../assets/images/Opinion/europa/vallecano1.jpg";
import Vallecano02 from "../../assets/images/Opinion/europa/vallecano2.jpg";
import Vallecano03 from "../../assets/images/Opinion/europa/vallecano3.jpg";
import Vallecano04 from "../../assets/images/Opinion/europa/vallecano4.jpg";
// Valdano
import Valdano from "../../assets/images/Opinion/europa/valdano1.jpg";
import Valdano2 from "../../assets/images/Opinion/europa/valdano2.jpg";
// Distefano
import Madrid from "../../assets/images/Opinion/europa/distefano.jpg";
// PSG
import PSG1 from "../../assets/images/Opinion/europa/Psg1.jpeg";
import PSG2 from "../../assets/images/Opinion/europa/Psg2.jpg";
import PSG3 from "../../assets/images/Opinion/europa/Psg3.jpg";
// PSG-Predio
import Predio1 from "../../assets/images/Opinion/europa/predio1.jpg";
import Predio2 from "../../assets/images/Opinion/europa/predio2.jpg";
import MessiFirma from "../../assets/images/Opinion/europa/MessiFirma.jpeg";
// Dagostino
import Dagostino from "../../assets/images/Opinion/europa/Dagostino.jpeg";
// Neymar
import Neymar from "../../assets/images/Opinion/europa/Neymar.jpg";
// Inter-Juve
import Milan1 from "../../assets/images/Opinion/europa/milan1.jpeg";
import Milan2 from "../../assets/images/Opinion/europa/milan2.jpeg";
// Wergifker.jpeg
import Wergifker from "../../assets/images/Opinion/europa/Wergifker.jpeg";
// Juan Jose Franco
import JuanJoseFranco from "../../assets/images/Opinion/europa/MilanSocio1.jpg";
import JuanJoseFranco2 from "../../assets/images/Opinion/europa/MilanSocio2.jpg";

export default function GiraEuropea() {
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
          UNIÓN EN EL FUTBOL EUROPEO: VISITA A ESPAÑA, FRANCIA E ITALIA
        </Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.imageResponsive}
          src={Portada}
          alt="Lionel Messi"
        />
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item className={classes.gridSeparation}>
          <Avatar
            src="https://i.imgur.com/5mBr2Lq.jpg"
            alt="Eneas cencha"
            className={classes.userAvatar}
          />
        </Grid>
        <Grid item>Por Leonardo Simonutti</Grid>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Con el fin de relacionarnos con la elite del futbol mundial, además de
          capacitarnos, aprender y evolucionar personal e institucionalmente,
          visitamos Clubes, nos reunimos con dirigentes, ex futbolistas,
          periodistas y socios de nuestro Union de Santa Fe.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          En Madrid visitamos las instalaciones del{" "}
          <strong>Club Rayo Vallecano</strong>, quien juega en la A de la Liga
          española de futbol, y tuvimos una amena reunion con{" "}
          <strong>Emiliano Armenteros</strong>, quien es Coordinador de Futbol
          Profesional y tambén con <strong>Matias Digregorio</strong>, ex
          futbolista hoy radicado en España y vinculado a los Clubes de la Liga
          de España y Grecia. Observamos la practica del futbol profesional del
          primer equipo, además de los entrenamientos de las jugadoras del
          Futbol Femenimo y su organización dentro del Club.
        </Typography>
      </Grid>
      <Grid item style={{ textAlign: "-webkit-center" }}>
        <div>
          <Carousel className={classes.carosuel}>
            <Carousel.Item>
              <img
                src={Vallecano01}
                alt="Rayo vallecano"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Vallecano02}
                alt="Rayo vallecano"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Vallecano03}
                alt="Rayo vallecano"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Vallecano04}
                alt="Rayo vallecano"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Conversamos y nos entregó su sabiduría el ex futbolista, periodista,
          escritor y Campeón del Mundo <strong>Jorge Valdano</strong>.Además nos
          aconsejó sobre como insertar y mostrar los jugadores de nuestra
          cantera en España. La charla derivo en anécdotas del Mundial 86, la
          presencia siempre de Diego Maradona y el cariño a Nery Pumpido.
        </Typography>
      </Grid>
      <Grid item style={{ textAlign: "-webkit-center" }}>
        <div>
          <Carousel className={classes.carosuel}>
            <Carousel.Item>
              <img
                src={Valdano}
                alt="Jorge Valdano"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Valdano2}
                alt="Jorge Valdano"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          También en Madrid visitamos el Estadio Alfredo Di Stéfano del Real
          Madrid, y pudimos observar jóvenes figuras del encuentro clásico entre
          Real Madrid B y Barcelona B. Además quedamos asombrados por la
          presencia de <strong>Florentino Peréz</strong>, presidente del Real
          Madrid observando el partido de lo que vendría a ser su plantilla de
          Reserva como se la conoce acá en Argentina.
        </Typography>
      </Grid>
      <Grid item>
        <img className={classes.imageResponsive} src={Madrid} alt="Madrid" />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Ya en Paris, pudimos ser recibidos en el Estadio de PSG, e invitados a
          su palco por el número uno del mundo: <strong>Lionel Messi</strong>, a
          quien lo une una amistad muy estrecha con quién será nuestro manager:
          Claudio Gugnali, dado que Claudio fue Ayudante de Campo de Alejandro
          Sabella durante sus años en la Selección Argentina. Pudimos contarle
          de nuestro proyecto en Unión, interesarse de nuestra realidad, saber
          de su presente y la invitación que le realizáramos para visitar
          nuestra ciudad en el próximo año.
        </Typography>
      </Grid>
      <Grid item style={{ textAlign: "-webkit-center" }}>
        <div>
          <Carousel className={classes.carosuel}>
            <Carousel.Item>
              <img src={PSG2} alt="Psg 2" className={classes.carosuelImage} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={PSG1} alt="Psg 1" className={classes.carosuelImage} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={PSG3} alt="Psg 3" className={classes.carosuelImage} />
            </Carousel.Item>
          </Carousel>
        </div>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Invitados por Lionel visitamos el Centro de entrenamiento de PSG, a
          las afueras de Paris, donde compartimos una charla amena,
          intercambiamos puntos de vistas sobre el futuro de los jugadores
          argentinos en Europa, Asia y USA, y además de desearnos lo mejor para
          nuestra tarea en el Club de ser gobierno, y su apoyo a este
          emprendimiento de poner el futbol de Unión en lo más alto.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Estuvimos con <strong>Miguel D'Agostino</strong>, actual ayudante de
          campo de Mauricio Pochettino, entrenador del primer equipo del PSG,
          donde conversamos del perfil de futbolista exitoso en Francia. Miguel
          es un paranaense que triunfa en el mundo.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <img
          className={classes.imageResponsive}
          src={Dagostino}
          alt="Miguel D'Agostino"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Intercambiamos minutos de charla afectuosos con{" "}
          <strong>Neymar</strong>, comentarios sobre nuestra presencia en
          Europa, y los recuerdos con Claudio Gugnali al momento de compartir
          momentos comunes con las selecciones de Brasil y Argentina.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <img className={classes.imageResponsive} src={Neymar} alt="Neymar" />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          En el Predio de entrenamiento le entregamos a <strong>Messi</strong>{" "}
          nuestra camiseta con la numero 10 para él y a cambio él nos firmó una
          camiseta para que sea regalada a los hinchas de nuestro Club.
        </Typography>
      </Grid>
      <Grid item style={{ textAlign: "-webkit-center" }}>
        <div>
          <Carousel className={classes.carosuel}>
            <Carousel.Item>
              <img
                src={Predio1}
                alt="Messi con la del Tate"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Predio2}
                alt="Predio psg"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Grid>
      <Grid item>
        <img
          className={classes.imageResponsive}
          src={MessiFirma}
          alt="Messi firma"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Fuimos invitados por Inter de Milán a asistir en encuentro Clásico con
          Juventus, donde recorrimos las instalaciones, estuvimos con personal
          profesional de la institución, y observamos el potencial que tiene
          nuestro estadio para mejorar los servicios y comodidades al hincha,
          socios y, además, a nuestros futbolistas. Poca inversión es necesaria
          para muchísima mejora, más aún siendo nuestro Unión un Club de la
          elite del futbol argentino.
        </Typography>
      </Grid>
      <Grid item style={{ textAlign: "-webkit-center" }}>
        <div>
          <Carousel className={classes.carosuel}>
            <Carousel.Item>
              <img
                src={Milan1}
                alt="Inter - Juve"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={Milan2}
                alt="Inter - Juve2"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Estuvimos con <strong>Pablo Wergifker</strong>, Coordinador de la
          Escuela del Futbol del Pupi Zanetti y Cuchu Cambiasso, donde
          conversamos de lo importante que es el jugador argentino en Italia, y
          sobre todo lo admirada de su técnica. La posibilidad que unionistas
          podamos conocer en el futuro la forma de trabajo y las necesidades del
          futbol italiano en formativas.
        </Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.imageResponsive}
          src={Wergifker}
          alt="Pablo Wergifker"
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Conversamos con dirigentes del Torneo de Futbol Viareggio, encuentro
          internacional de nuevas promesas del futbol, donde conocimos cuales
          son los requisitos para participar en el futuro con nuestro Club A.
          Unión.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Nos hicimos eco de un mensaje que nos dejó en Twitter{" "}
          <strong>Juan José Franco</strong>, un hincha fanático y socio de
          nuestro Club, que reside en Milán y es funcionario de la reconocida
          marca internacional Giorgio Armani, actual sponsor del Napoli.
          Coordinamos una reunión donde compartimos una cena e intercambiamos
          ideas para llevar adelante, conjuntamente con otras instituciones y
          socios de Unión en el mundo.
        </Typography>
      </Grid>
      <Grid item>
        <blockquote class="twitter-tweet" data-theme="dark">
          <p lang="es" dir="ltr">
            Soy hincha fanàtico y socio de Uniòn y resido en Milan. Estoy a
            disposiciòn del Dr. Simonutti, con quien me gustarìa colaborar. Un
            cordial saludo
          </p>
          &mdash; Snpart (@Snpart1Snpart){" "}
          <a href="https://twitter.com/Snpart1Snpart/status/1448292715217686533?ref_src=twsrc%5Etfw">
            October 13, 2021
          </a>
        </blockquote>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Grid>
      <Grid item style={{ textAlign: "-webkit-center" }}>
        <div>
          <Carousel className={classes.carosuel}>
            <Carousel.Item>
              <img
                src={JuanJoseFranco}
                alt="Mensaje en twitter"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={JuanJoseFranco2}
                alt="Reunión con socio"
                className={classes.carosuelImage}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Tanto en Milán, como en Madrid y Paris, nuestras reuniones tuvieron
          los éxitos esperados. Hemos estado con empresarios de los medios de
          comunicación, del marketing deportivo, dirigentes de Clubes de
          categorías del asenso Español y periodistas especializados de Europa.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Este fue un gran viaje. Grandes experiencias. Mejor futuro. Un Unión
          internacional. Un Club que los hinchas merecemos.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Leonardo Simonutti.
        </Typography>
      </Grid>
      <Grid item className={classes.centerText}>
        <ShareInSocialMedia
          link="http://www.triunfotatengue.com.ar/#/resumen_gira_europea"
          title="Resumen Gira Europea, por Leonardo Simonutti"
        />
      </Grid>
    </Grid>
  );
}
