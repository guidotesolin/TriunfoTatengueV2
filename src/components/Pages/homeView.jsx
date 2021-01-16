import React from "react";
import { Typography, Grid, List, ListItem } from "@material-ui/core";
import styles from "../../assets/styles/homeViewStyles";

export default function Homepage(props) {
  //const { } = props;

  const classes = styles();

  return (
    <Grid container className={classes.containerTab}>
      <Typography>Nuestro anteproyecto de reforma de estatuto</Typography>
      <Typography>
        Hinchas y socios de UNIÓN, desde Triunfo Tatengue queremos presentarles
        nuestro Proyecto de reforma de Estatuto, tal como habiamos prometido
        oportunamente. Es un trabajo hecho a conciencia, con muchas horas de
        estudio, consultando a profesionales y observando los Estatutos de
        instituciones prestigiosas y exitosas. Mantenemos la identidad que
        caracteriza al Club social y deportivo más importante de la región. En
        total trabajamos en 154 Artículos, y destacamos lo mas relevante a
        continuación
      </Typography>
      <Typography>INSTITUCIONAL</Typography>
      <List>
        <ListItem>Identidad de imagen, emblema y distintivos.</ListItem>
        <ListItem>Ampliación de objetivos y finalidades.</ListItem>
        <ListItem>Garantía de preservación de la Institución.</ListItem>
        <ListItem>Ampliación del detalle de patrimonio del Club.</ListItem>
        <ListItem>
          Ampliación de limitaciones a la CD sobre el patrimonio del Club.
        </ListItem>
        <ListItem>Títulos Patrimoniales.</ListItem>
      </List>
      <Typography>ASOCIADOS</Typography>
      <List>
        <ListItem>
          Designación clara de tipos de socios y delimitación de las categorías:
          HONORARIOS, VITALICIOS, ACTIVOS, JUBILADOS/PENSIONADOS, BENEFACTORES,
          FORÁNEOS, MENORES, INFANTILES, FEDERADOS Y BECADOS.
        </ListItem>
        <ListItem>
          Creación de nuevas categorías y grupos sociales: GRUPO FAMILIAR /
          GRUPO UNIÓN SOCIAL.
        </ListItem>
        <ListItem>
          Transformación de la Categoría de Socio Adherente o Cancha.
        </ListItem>
        <ListItem>
          Incorporación de menores de 16 años cumplidos a la vida política del
          Club.
        </ListItem>
        <ListItem>Limitación a Empleados del Club.</ListItem>
        <ListItem>
          Reglamentación de la Suspensión, Renuncia, Cesantía, Expulsión y
          Reincorporación del Asociado.
        </ListItem>
        <ListItem>
          Reformulación de los Derechos, Facultades y Obigaciones de los
          Asociados.
        </ListItem>
        <ListItem>Incorporación de la Diversidad Funcional.</ListItem>
        <ListItem>
          Incorporación de medios tecnológicos de consulta al asociado.
        </ListItem>
        <ListItem>Ampliación y Reglamentación FILIALES.</ListItem>
        <ListItem>
          Identidad y Reglamentación AGRUPACIONES (que participan de la vida
          política).
        </ListItem>
        <ListItem>Creación del Registro Abierto de Agrupaciones.</ListItem>
        <ListItem>
          Identidad y Reglamentación de PEÑAS y OTRAS ORGANIZACIONES AFINES.
        </ListItem>
      </List>
      <Typography>GOBIERNO DE LA INSTITUCIÓN</Typography>
      <List>
        <ListItem>
          Delimitación clara y real, reordenamiento y reglamentación de quienes
          gobiernan el Club: LA ASAMBLEA DE REPRESENTANTES, LA COMISIÓN
          DIRECTIVA, COMISIÓN FISCALIZADORA Y COMISIÓN DE ÉTICA Y DISCIPLINA.
        </ListItem>
        <ListItem>
          Creación de las Comisiones FISCALIZADORA y de ETICA Y DISCIPLINA con
          participación de la Minorías.
        </ListItem>
        <ListItem>Reglamentación clara de las ASAMBLEAS DE ASOCIADOS.</ListItem>
        <ListItem>
          2 asambleas ORDINARIAS anuales obligatorias: 1. Balance / 2.
          Presupuesto.
        </ListItem>
        <ListItem>
          Reestructuración de la COMISIÓN DIRECTIVA. Con participación de las
          MINORÍAS.
        </ListItem>
        <ListItem>
          Cambio en Duración de los mandatos (4 años). No a la reelección
          indefinida, solo 1 reelección.
        </ListItem>
        <ListItem>
          Reformulación de los Cargos eleccionarios y la conformación de la CD
          final.
        </ListItem>
        <ListItem>
          Reglamentación clara de derechos, obligaciones, facultades y forma de
          sesionar de la CD.
        </ListItem>
        <ListItem>
          Delimitación Estructural detallada para el funcionamiento de
          Departamentos.
        </ListItem>
        <ListItem>Subcomisiones.</ListItem>
        <ListItem>Figura del Gerente General del Club.</ListItem>
        <ListItem>Tribunal de Honor.</ListItem>
      </List>

      <Typography>ACTO ELECCIONARIO</Typography>
      <List>
        <ListItem>Detalle exhaustivo del Acto de Elecciones.</ListItem>
        <ListItem>
          Formación Democrática y Transparente de la Junta Electoral con
          representación de todas las Agrupaciones participantes.
        </ListItem>
      </List>
    </Grid>
  );
}
