import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Button,
  MobileStepper,
} from "@material-ui/core";
import styles from "../../assets/styles/propuestasStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Database from "../Propuestas/database";
import dateToString from "../utils/dateToString";

export default function PropuestasMainPage() {
  const classes = styles();
  const [propuestas, setPropuestas] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [avalaiblePages, setAvalaiblePages] = useState(0);
  const [pagination, setPagination] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    setPropuestas(Database);
  }, []);

  useEffect(() => {
    if (propuestas.length > 0) {
      const pages = Math.ceil(propuestas.length / 10);
      const paginateArray = propuestas.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      );
      setPagination(paginateArray);
      setAvalaiblePages(pages);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propuestas]);

  const handleNext = () => {
    const newPage = pageNumber + 1;
    const paginateArray = propuestas.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  const handleBack = () => {
    const newPage = pageNumber - 1;
    const paginateArray = propuestas.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  const renderPropuesta = (propuesta) => {
    const gridPropuesta = (
      <Grid className={classes.gridPropuesta}>
        <Grid>
          <img
            src={propuesta.image}
            alt={propuesta.imageAlt}
            className={classes.preview}
          />
        </Grid>
        <Grid>
          <Typography className={classes.title}>{propuesta.title}</Typography>
          <Typography className={classes.epigraph}>
            {propuesta.epigraph}
          </Typography>
          <Typography className={classes.text}>{propuesta.text}</Typography>
          <Grid
            style={{ marginTop: "5px", display: "flex", alignItems: "center" }}
          >
            <Button className={classes.button}>
              <Link
                to={propuesta.link}
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Ver completo
              </Link>
            </Button>
            <Typography className={classes.addedText}>
              <em>{dateToString(propuesta.date)}</em>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
    return gridPropuesta;
  };

  return (
    <Grid container style={{ justifyContent: "center" }} alignItems="center">
      <Grid item>
        <Typography className={classes.tituloSeccion}>PROPUESTAS</Typography>
      </Grid>
      <Grid item>
        {pagination.length === 0 ? (
          <CircularProgress />
        ) : (
          pagination.map((propuesta, index) => {
            return (
              <Grid key={index}>
                {renderPropuesta(propuesta)}
                <Divider className={classes.divider} />
              </Grid>
            );
          })
        )}
      </Grid>
      <Grid item>
        {avalaiblePages > 1 && (
          <MobileStepper
            className={classes.pagination}
            variant="dots"
            steps={avalaiblePages}
            position="static"
            activeStep={pageNumber}
            nextButton={
              <Button
                className={classes.paginationButton}
                size="small"
                onClick={handleNext}
                disabled={pageNumber === avalaiblePages}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                className={classes.paginationButton}
                size="small"
                onClick={handleBack}
                disabled={pageNumber === 0}
              >
                <KeyboardArrowLeft />
              </Button>
            }
          />
        )}
      </Grid>
    </Grid>
  );
}
