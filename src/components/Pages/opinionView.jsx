import React, { useState, useEffect } from "react";
import styles from "../../assets/styles/listPageStyles";
import Database from "../Opinion/database";
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
import RenderOpinion from "../utils/listElementView";

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
    } // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <RenderOpinion
                  element={opinion}
                  buttonText={"Continuar leyendo"}
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
