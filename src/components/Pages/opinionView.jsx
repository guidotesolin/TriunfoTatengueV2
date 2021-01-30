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
import styles from "../../assets/styles/opinionStyles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Database from "../Opinion/database";
import dateToString from "../utils/dateToString";

export default function OpinionMainPage() {
  const classes = styles();
  const [opinion, setOpinion] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [avalaiblePages, setAvalaiblePages] = useState(0);
  const [pagination, setPagination] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    setOpinion(Database);
  }, []);

  useEffect(() => {
    if (opinion.length > 0) {
      const pages = Math.ceil(opinion.length / 10);
      const paginateArray = opinion.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      );
      setPagination(paginateArray);
      setAvalaiblePages(pages);
    }
  }, [opinion]);

  const handleNext = () => {
    const newPage = pageNumber + 1;
    const paginateArray = opinion.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  const handleBack = () => {
    const newPage = pageNumber - 1;
    const paginateArray = opinion.slice(
      newPage * pageSize,
      (newPage + 1) * pageSize
    );
    setPagination(paginateArray);
    setPageNumber(newPage);
  };

  const renderOpinion = (opinion) => {
    const gridOpinion = (
      <Grid className={classes.gridOpinion}>
        <Grid>
          <img
            src={opinion.image}
            alt={opinion.imageAlt}
            className={classes.preview}
          />
        </Grid>
        <Grid>
          <Typography className={classes.title}>{opinion.title}</Typography>
          <Typography className={classes.epigraph}>
            Por {opinion.author}
          </Typography>
          <Typography className={classes.text}>{opinion.text}</Typography>
          <Grid
            style={{ marginTop: "5px", display: "flex", alignItems: "center" }}
          >
            <Button className={classes.button}>
              <Link to={opinion.link} className={classes.link}>
                Continuar leyendo
              </Link>
            </Button>
            <Typography className={classes.addedText}>
              <em>{dateToString(opinion.date)}</em>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
    return gridOpinion;
  };

  return (
    <Grid container style={{ justifyContent: "center" }} alignItems="center">
      <Grid item>
        <Typography className={classes.tituloSeccion}>OPINIÓN</Typography>
      </Grid>
      <Grid item>
        {pagination.length === 0 ? (
          <CircularProgress />
        ) : (
          pagination.map((opinion, index) => {
            return (
              <Grid key={index}>
                {renderOpinion(opinion)}
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
