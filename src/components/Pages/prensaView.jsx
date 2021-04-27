import React, { useState, useEffect } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Divider,
  Button,
  MobileStepper,
  Link,
} from "@material-ui/core";
import styles from "../../assets/styles/prensaStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Database from "../Prensa/database";
import dateToString from "../utils/dateToString";

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
    } // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Grid className={classes.gridNoticia}>
        <Grid>
          <img
            src={noticia.image}
            alt={noticia.imageAlt}
            className={classes.preview}
          />
        </Grid>
        <Grid>
          <Typography className={classes.title}>{noticia.title}</Typography>
          <Typography className={classes.epigraph}>
            {noticia.epigraph}
          </Typography>
          <Typography className={classes.text}>{noticia.text}</Typography>
          <Grid className={classes.gridButton}>
            <Button className={classes.button}>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={noticia.link}
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Noticia completa
              </Link>
            </Button>
            <Typography className={classes.addedText}>
              <em>{dateToString(noticia.date)}</em>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
    return gridNoticia;
  };

  return (
    <Grid container className={classes.gridJustifyContent} alignItems="center">
      <Grid item>
        <Typography className={classes.tituloSeccion}>PRENSA</Typography>
      </Grid>
      <Grid item>
        {pagination.length === 0 ? (
          <CircularProgress />
        ) : (
          pagination.map((noticia, index) => {
            return (
              <Grid key={index}>
                {renderNoticia(noticia)}
                {index < pagination.length - 1 && (
                  <Divider className={classes.divider} />
                )}
              </Grid>
            );
          })
        )}
      </Grid>
      <Grid item className={classes.gridPagination}>
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
      </Grid>
    </Grid>
  );
}
