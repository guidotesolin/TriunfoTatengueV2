import React from "react";
import styles from "../../assets/styles/generalPagesSyles";
import { Grid, Typography, Link as Redirect } from "@material-ui/core";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";

export default function Asociate() {
  const classes = styles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      wrap="nowrap"
      className={classes.root}
    >
      <Grid item className={classes.centerText}>
        <Typography className={classes.tituloSeccion}>
          SÉ SOCIO DE UNIÓN AHORA!
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <iframe
          title="Pasate a pleno"
          src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fleonardo.simonutti%2Fvideos%2F10220291833628268%2F&show_text=false&width=380"
          width="380"
          height="476"
          className={classes.facebookVideo}
          scrolling="no"
          frameborder="0"
          allowfullscreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Hoy en día la única manera de tener voz y voto en el club para
          elecciones y asambleas es siendo <strong>SOCIO PLENO</strong> con un
          año de antiguedad.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Según el último informe elevado de parte del Club a AFA hay 2036
          socios adherentes, estos socios por una diferencia mínima de $80{" "}
          <strong>
            están perdiendo la oportunidad de votar en las proximas elecciones.
          </strong>
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          A pesar de que se encuentra mitigados por la pandemia, los numeros
          totales de socios se encuentran muy lejanos de la realidad que debería
          reflejar la institución social y deportiva mas importante de la
          región.
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Aspiramos a llevar la masa societaria de 17.000 socios a 35.000 en
          nuestro primer año de gestión a partir del año próximo
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          También tenemos un Proyecto para{" "}
          <strong>ELIMINAR ESTA DIFERENCIA DE TAN SÓLO $80 </strong>
          porque creemos que, no sólo que TODOS NUESTROS SOCIOS DEBERÍAN PODER
          TENER LOS MISMOS BENEFICIOS, sino que también pensamos que CADA UNO DE
          ELLOS DEBERÍA TENER EL DERECHO A VOTAR.
        </Typography>
        <Typography
          variant="h4"
          className={classes.centerText}
          style={{ color: "#085fb6" }}
        >
          AYUDANOS A HACER EL CAMBIO EN UNIÓN
        </Typography>
        <Typography className={classes.textoDesarrollo}>
          Hoy en día podes asociarte con solo un par de clicks desde la pagina
          oficial del club clickeando en la imagen que se encuentra al final de
          la pagina. Si no ganamos las elecciones, al menos ayudamos para que
          cada día haya más Tatengues alentando en Nuestro Hermoso 15 de Abril.
        </Typography>
      </Grid>

      <Grid item className={classes.gridSeparation}>
        <Redirect
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.sociosunion.com.ar/#/asociate"
          style={{ textDecoration: "none" }}
        >
          <img
            src="https://i.imgur.com/7PLCD4m.jpg"
            alt="Asociate"
            className={classes.imageResponsive}
          />
        </Redirect>
      </Grid>

      <Grid item className={classes.centerText}>
        <ShareInSocialMedia
          link="http://www.triunfotatengue.com.ar/#/asociate"
          title="La unica manera de hacer valer tu voz es asociarse"
        />
      </Grid>
    </Grid>
  );
}
