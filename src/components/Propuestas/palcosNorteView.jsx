import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
} from "@mui/material/";
import styles from "../../assets/styles/generalPagesSyles";
import { styled } from "@mui/material/styles";
import ShareInSocialMedia from "../utils/shareInSocialMediaView";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import ModalImage from "react-modal-image";
import PalcosFrente from "../../assets/images/Propuestas/palcosNorte/frente.jpg";
import PalcosInterior from "../../assets/images/Propuestas/palcosNorte/interior.jpg";

export default function PalcosNorte() {
  const classes = styles();

  const createObject = (name, total, sup, totalSup) => {
    return { name, total, sup, totalSup };
  };

  const tableRows = [
    createObject("Palcos", "14", "20.70", "289.80"),
    createObject("Pacos VIP", "4", "40.50", "160.20"),
    createObject("Sanitarios", "2", "20.70", "41.40"),
    createObject("Restaurant / bar", "1", "40.27", "40.27"),
    createObject("Ascensores", "1", "33.50", "33.50"),
    createObject("Circulación", "1", "260", "260"),
    createObject("Total del nivel:", "", "", "825.17"),
  ];

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
          PALCOS SOBRE CÁNDIDO PUJATO
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Entre los numerosos proyectos de nuestro equipo de Infraestructura,
          sin lugar a dudas el proyecto más importante es la culminación del
          Estadio 15 de Abril: este proyecto consiste en la terminación de las
          obras inconclusas y las nuevas áreas que se deberán construir. Siempre
          se trabaja respetando el Proyecto Original. En esta oportunidad nos
          enfocaremos en los Palcos Norte ubicados sobre la calle Cándido
          Pujato.
        </Typography>
      </Grid>
      <Grid item>
        <ModalImage
          small={PalcosFrente}
          large={PalcosFrente}
          alt="Vista frontal"
          className={classes.imageResponsive}
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          <i>
            <strong>Aclaración</strong>
          </i>:{" "}
          este render corresponde a la proyección final planeada que finalizaría
          conviritiendo lo que ahora es popular en platea.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Estos palcos serán 88 en total con capacidad para 10 personas cada
          uno, contarán con un equipamiento de frigobar, TV LED, mesada de
          cocina y estarán equipados con butacas de teatro. También se
          construirán los Palcos VIP con un tamaño mayor y con sanitarios de uso
          exclusivo.
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Este nuevo edificio se recuesta sobre el lateral norte del estadio de
          futbol sobre la tribuna existente “La Pujato” y responde al ideado
          originalmente por los proyectistas del Estadio de la Gente. Consiste
          en una tira de 6.50 mts de ancho y 130 mts de largo, generando una
          superficie edificable de 825 m2 por piso aproximadamente, respondiendo
          al siguiente programa:
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Primer Nivel</StyledTableCell>
                <StyledTableCell align="right">Cantidad</StyledTableCell>
                <StyledTableCell align="right">Superficie (m2)</StyledTableCell>
                <StyledTableCell align="right">Total (m2)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.total}</StyledTableCell>
                  <StyledTableCell align="right">{row.sup}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.totalSup}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Segundo Nivel</StyledTableCell>
                <StyledTableCell align="right">Cantidad</StyledTableCell>
                <StyledTableCell align="right">Superficie (m2)</StyledTableCell>
                <StyledTableCell align="right">Total (m2)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.total}</StyledTableCell>
                  <StyledTableCell align="right">{row.sup}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.totalSup}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tercer Nivel</StyledTableCell>
                <StyledTableCell align="right">Cantidad</StyledTableCell>
                <StyledTableCell align="right">Superficie (m2)</StyledTableCell>
                <StyledTableCell align="right">Total (m2)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.total}</StyledTableCell>
                  <StyledTableCell align="right">{row.sup}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.totalSup}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <TableContainer component={Paper} className={classes.table}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Cuarto Nivel</StyledTableCell>
                <StyledTableCell align="right">Cantidad</StyledTableCell>
                <StyledTableCell align="right">Superficie (m2)</StyledTableCell>
                <StyledTableCell align="right">Total (m2)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.total}</StyledTableCell>
                  <StyledTableCell align="right">{row.sup}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.totalSup}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          Teniendo en cuenta los calculos explicados y desarrollados en la tabla
          de arriba se desprenden (de forma aproximada) los siguientes valores
          claves a tener en cuenta a la hora de ejecutar la obra:
          <ul style={{ marginTop: "10px" }}>
            <li>
              Superficie total a cubrir de <strong>3.300 m2</strong>.
            </li>
            <li>
              <strong>Forma de Ejecución:</strong> Se realizará un concurso
              privado de precios con empresas que proveeran la construcción,
              financiación al Socio/Club y entregarán un Seguro por Fiel
              Cumplimiento de Contrato (tiempo y forma) como se realiza
              habitualmente en este tipo de emprendimientos. De esta manera la
              obra se puede llevar a cabo con fondos privados, sin que el club
              tenga que inmovilizar dinero de su giro habitual.
            </li>
            <li>
              Tiempo de Ejecución: <strong>2 años</strong>.
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          El nuevo lateral del estadio se piensa erigir con un sistema
          constructivo mixto: hormigón armado y acero. El primero, está
          exclusivamente destinado a los tabiques que sostienen toda la
          estructura de los palcos y la cubierta de techos. Las estructuras
          metálicas contienen a los palcos y apoyan sobre los elementos
          estructurales principales en sus cuatro niveles de altura, la forma
          del conjunto se denomina vigas vierendeel. Como coronamiento e imagen
          final del conjunto del estadio terminado, se adopta la cubierta
          íntegra en acero.
        </Typography>
      </Grid>
      <Grid item>
        <ModalImage
          small={PalcosInterior}
          large={PalcosInterior}
          alt="Vista interior"
          className={classes.imageResponsive}
        />
      </Grid>
      <Grid item className={classes.gridSeparation}>
        <Typography className={classes.textoDesarrollo}>
          La combinación de sistemas constructivos propicia la aceleración en
          los procesos de montaje, reduciendo los tiempos en obra y asegurando
          calidad a las terminaciones de la construcción.
        </Typography>
      </Grid>
      <ShareInSocialMedia
        link="http://www.triunfotatengue.com.ar/#/palcos_norte"
        title="Palcos Norte"
      />
    </Grid>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ef233c",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: { fontSize: 14 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover },
  "&:last-child td, &:last-child th": {
    border: 0,
    backgroundColor: "#ef233c",
    color: theme.palette.common.white,
  },
}));
