import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography, Divider } from "@material-ui/core";
import styles from "../../assets/styles/agrupacionStyles";
import Database from "../Prensa/database";

export default function PrensaMainPage() {
  const classes = styles();
  const [prensa, setPrensa] = useState([]);

  useEffect(() => {
    setPrensa(Database);
  }, []);

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
      {prensa.length === 0 ? (
        <CircularProgress />
      ) : (
        prensa.map((noticia, index) => {
          return (
            <Grid key={index}>
              {renderNoticia(noticia)}
              <Divider />
            </Grid>
          );
        })
      )}
    </Grid>
  );
}
