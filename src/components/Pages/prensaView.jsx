import React, { useState, useEffect } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Button,
  MobileStepper,
} from "@material-ui/core";
import styles from "../../assets/styles/agrupacionStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Database from "../Prensa/database";

export default function PrensaMainPage() {
  const classes = styles();
  const [prensa, setPrensa] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [avalaiblePages, setAvalaiblePages] = useState(0);
  const [pagination, setPagination] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    setPrensa(Database);
  }, []);

  useEffect(() => {
    if (prensa.length > 0) {
      const pages = Math.ceil(prensa.length / 10);
      const paginateArray = prensa.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      );
      setPagination(paginateArray);
      setAvalaiblePages(pages);
    }
  }, [prensa]);

  const handleNext = () => {
    const newPage = pageNumber + 1;
    const paginateArray = prensa.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  const handleBack = () => {
    const newPage = pageNumber - 1;
    const paginateArray = prensa.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  const renderNoticia = (noticia) => {
    const gridNoticia = (
      <Grid>
        <Typography>{noticia.title}</Typography>
        <Typography>{noticia.epigraph}</Typography>
        <Typography>{noticia.text}</Typography>
      </Grid>
    );
    return gridNoticia;
  };

  return (
    <Grid container>
      <p>
        Noticias: {prensa.length}, paginas disponibles: {avalaiblePages},
        paginaActual: {pageNumber}{" "}
      </p>
      {pagination.length === 0 ? (
        <CircularProgress />
      ) : (
        pagination.map((noticia, index) => {
          return (
            <Grid key={index}>
              {renderNoticia(noticia)}
              <Divider />
            </Grid>
          );
        })
      )}
      <MobileStepper
        variant="dots"
        steps={avalaiblePages}
        position="static"
        activeStep={pageNumber}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={pageNumber === avalaiblePages}
          >
            Siguiente <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={pageNumber === 0}>
            <KeyboardArrowLeft />
            Anterior
          </Button>
        }
      />
    </Grid>
  );
}
