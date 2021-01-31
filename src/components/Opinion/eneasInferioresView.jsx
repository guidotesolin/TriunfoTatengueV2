import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import styles from "../../assets/styles/opinionStyles";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";

export default function EneasInferiores() {
  const classes = styles();

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      wrap="nowrap"
    >
      <Grid item>
        <Typography className={classes.tituloSeccion}>
          LAS INFERIORES Y SU IMPORTANCIA
        </Typography>
      </Grid>
      <Grid item>
        <img
          style={{ maxWidth: "60vh", marginBottom: "20px" }}
          src="https://i.imgur.com/iYWUGze.jpg"
          alt="Eneas Cencha"
        />
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item>
          <Avatar
            src={"https://i.imgur.com/PEF0dg6.jpg"}
            alt={"Eneas cencha"}
            style={{ height: "50px", width: "50px", marginRight: "15px" }}
          />
        </Grid>
        <Grid item>Por Eneas Cencha</Grid>
      </Grid>
      <Grid item style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Typography className={classes.textoDesarrollo}>
          En Triunfo Tatengue sabemos que las divisiones inferiores son el pilar
          de todos los clubes de futbol, por lo que consideramos que deben ser
          tomadas con mayor consideración desde el club, queremos que Unión sea
          un modelo para los demás equipos, como por ejemplo lo son Vélez, Lanús
          entre tantos otros.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          En Santa Fe estamos localizados en el epicentro de las promesas
          futbolísticas, en los alrededores, en ciudades y pueblos, hay chicos
          habilidosos que el club debe captar y pulirlos para que el día de
          mañana sean grandes jugadores capaz de elevar al club al lugar donde
          se merece.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Debemos trabajar codo a codo con cada filial para lograr que estas
          sean un club participante en una liga federada y de esta manera cubrir
          aún más el área de captación, hoy en día en el club no se trabaja de
          esta manera por lo que consideramos que se escapan muchas
          oportunidades.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Creemos que las filiales pueden ser aún más que entidades sociales,
          estas pueden ayudar en la captación de jugadores y en la contención de
          las jóvenes promesas. El club debe estar presente para las filiales,
          por ejemplo:
        </Typography>
        <ul>
          <li className={classes.textoLista}>
            Seguimiento psicológico y nutricional para que los jugadores logren
            afrontar las inferiores de una manera sana y cuidada.
          </li>
          <li className={classes.textoLista}>
            Colocando clínicas para arqueros, algo en lo que siempre se destacó
            Unión y hoy en día nuestros arqueros no logran tener la solidez
            necesaria.
          </li>
          <li className={classes.textoLista}>
            Brindarles la posibilidad de que el chico se muestre en su propia
            ciudad o pueblo sin la necesidad de viajar, para que en la prueba
            pueda demostrar el 100%.
          </li>
        </ul>
        <Typography className={classes.textoDesarrollo}>
          Las inferiores deben tomar la importancia que se merecen si queremos
          crecer como club y como institución.
          <strong> Unidos, juntos por Unión</strong>.
        </Typography>
        <Grid item style={{ textAlign: "center" }}>
          <ShareInSocialMedia
            link="http://www.triunfotatengue.com.ar/#/opinion_las_inferiores_y_su_importancia"
            title="Las inferiores y su importancia, por Eneas Cencha"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
