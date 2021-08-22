import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/listPageStyles";
import Database from "../Propuestas/database";
import {
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Button,
  MobileStepper,
} from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import RenderPropuesta from "../utils/listElementView";

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
    window.scrollTo(0, 0);
    const newPage = pageNumber + 1;
    const paginateArray = propuestas.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    const newPage = pageNumber - 1;
    const paginateArray = propuestas.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  return (
    <Grid container className={classes.gridRoot} alignItems="center">
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
                <RenderPropuesta
                  element={propuesta}
                  buttonText={"Ver completa"}
                  isExternal={false}
                />
                {index < pagination.length - 1 && (
                  <Divider
                    style={{ marginTop: "15px", marginBottom: "15px" }}
                  />
                )}
              </Grid>
            );
          })
        )}
      </Grid>
      <Grid item className={classes.gridPagination}>
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
                disabled={pageNumber === avalaiblePages - 1}
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
