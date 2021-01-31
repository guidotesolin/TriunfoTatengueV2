import React from "react";
import { Grid } from "@material-ui/core";
import styles from "../../assets/styles/homeViewStyles";

export default function Homepage() {
  const classes = styles();

  return (
    <Grid
      container
      style={{ justifyContent: "center" }}
      alignItems="center"
      className={classes.containerTab}
    >
      <Grid item>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KeinW5M6XfA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="Unidos"
        ></iframe>
      </Grid>
    </Grid>
  );
}
