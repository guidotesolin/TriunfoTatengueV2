import React from "react";
import styles from "../../assets/styles/generalPagesSyles";
import { Grid, Typography } from "@material-ui/core";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import EstatutoFile from "../../assets/documents/Estatuto.pdf";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";
import DownloadButton from "../utils/buttonView";

export default function EstatutoView() {
  const classes = styles();
  const workerUrl =
    "https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js";
  const linkEstatuto =
    "https://drive.google.com/file/d/18MIA5aZ4NDLFCgCbjU7yFLpdloC_mI9B/view?usp=sharing";

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
          NUESTRO ANTE PROYECTO DE REFORMA DE ESTATUTO
        </Typography>
      </Grid>
      <Grid item>
        <img
          className={classes.imageResponsive}
          src="https://i.imgur.com/rSDEWW9.jpg"
          alt="Reforma de estatuto"
        />
      </Grid>

      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Hinchas y socios de <strong>UNIÓN</strong>, desde Triunfo Tatengue
          queremos presentarles nuestro Proyecto de reforma de Estatuto, tal
          como habiamos prometido oportunamente. Es un trabajo hecho a
          conciencia, con muchas horas de estudio, consultando a profesionales y
          observando los Estatutos de instituciones prestigiosas y exitosas.
          Mantenemos la identidad que caracteriza al Club social y deportivo más
          importante de la región. En total trabajamos en 154 Artículos, y
          destacamos lo mas relevante a continuación:
        </Typography>
      </Grid>
      <ul>
        <h4>INSTITUCIONAL</h4>
        <li>Identidad de imagen, emblema y distintivos.</li>
        <li>Ampliación de objetivos y finalidades.</li>
        <li>Garantía de preservación de la Institución.</li>
        <li>Ampliación del detalle de patrimonio del Club.</li>
        <li>
          Ampliación de limitaciones a la CD sobre el patrimonio del Club.
        </li>
        <li>Títulos Patrimoniales.</li>
        <br />
        <h4>ASOCIADOS</h4>
        <li>
          Designación clara de tipos de socios y delimitación de las categorías:
          HONORARIOS, VITALICIOS, ACTIVOS, JUBILADOS/PENSIONADOS, BENEFACTORES,
          FORÁNEOS, MENORES, INFANTILES, FEDERADOS Y BECADOS.
        </li>
        <li>
          Creación de nuevas categorías y grupos sociales: GRUPO FAMILIAR /
          GRUPO UNIÓN SOCIAL.
        </li>
        <li>Transformación de la Categoría de Socio Adherente o Cancha.</li>
        <li>
          Incorporación de menores de 16 años cumplidos a la vida política del
          Club.
        </li>
        <li>Limitación a Empleados del Club.</li>
        <li>
          Reglamentación de la Suspensión, Renuncia, Cesantía, Expulsión y
          Reincorporación del Asociado.
        </li>
        <li>
          Reformulación de los Derechos, Facultades y Obigaciones de los
          Asociados.
        </li>
        <li>Incorporación de la Diversidad Funcional.</li>
        <li>Incorporación de medios tecnológicos de consulta al asociado.</li>
        <li>Ampliación y Reglamentación FILIALES.</li>
        <li>
          Identidad y Reglamentación AGRUPACIONES (que participan de la vida
          política).
        </li>
        <li>Creación del Registro Abierto de Agrupaciones.</li>
        <li>
          Identidad y Reglamentación de PEÑAS y OTRAS ORGANIZACIONES AFINES.
        </li>
        <br />
        <h4>GOBIERNO DE LA INSTITUCIÓN</h4>
        <li>
          Delimitación clara y real, reordenamiento y reglamentación de quienes
          gobiernan el Club: LA ASAMBLEA DE REPRESENTANTES, LA COMISIÓN
          DIRECTIVA, COMISIÓN FISCALIZADORA Y COMISIÓN DE ÉTICA Y DISCIPLINA.
        </li>
        <li>
          Creación de las Comisiones FISCALIZADORA y de ETICA Y DISCIPLINA con
          participación de la Minorías.
        </li>
        <li>Reglamentación clara de las ASAMBLEAS DE ASOCIADOS.</li>
        <li>
          2 asambleas ORDINARIAS anuales obligatorias: 1. Balance / 2.
          Presupuesto.
        </li>
        <li>
          Reestructuración de la COMISIÓN DIRECTIVA. Con participación de las
          MINORÍAS.
        </li>
        <li>
          Cambio en Duración de los mandatos (4 años). No a la reelección
          indefinida, solo 1 reelección.
        </li>
        <li>
          Reformulación de los Cargos eleccionarios y la conformación de la CD
          final.
        </li>
        <li>
          Reglamentación clara de derechos, obligaciones, facultades y forma de
          sesionar de la CD.
        </li>
        <li>
          Delimitación Estructural detallada para el funcionamiento de
          Departamentos.
        </li>
        <li>Subcomisiones.</li>
        <li>Figura del Gerente General del Club.</li>
        <li>Tribunal de Honor.</li>
        <br />
        <h4>ACTO ELECCIONARIO</h4>
        <li>Detalle exhaustivo del Acto de Elecciones.</li>
        <li>
          Formación Democrática y Transparente de la Junta Electoral con
          representación de todas las Agrupaciones participantes.
        </li>
        <br />
      </ul>
      <Grid item>
        <Worker workerUrl={workerUrl}>
          <Grid className={classes.pdfViewer}>
            <Viewer fileUrl={EstatutoFile} />
          </Grid>
        </Worker>
      </Grid>
      <Grid item>
        <DownloadButton
          buttonText={"Descargar proyecto completo"}
          link={linkEstatuto}
          isExternal={true}
        />
      </Grid>
      <ShareInSocialMedia
        link="http://www.triunfotatengue.com.ar/#/propuestas_estatuto"
        title="Nuestra propuesta para la reforma del estatuto"
      />
    </Grid>
  );
}
