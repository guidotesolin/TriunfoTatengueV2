import React from "react";
import styles from "../../assets/styles/listElementStyles";
import { Grid, Typography } from "@material-ui/core";
import Button from "./buttonView";
import dateToString from "../utils/functions/dateToString";

export default function ListElementView(props) {
  const { element, buttonText, isExternal } = props;
  const classes = styles();

  return (
    <Grid>
      <Grid className={classes.flexGrid}>
        <Grid>
          <img
            src={element.image}
            alt={element.imageAlt}
            className={classes.imagePreview}
          />
        </Grid>
        <Grid>
          <Typography className={classes.title}>{element.title}</Typography>
          <Typography className={classes.epigraph}>
            {element.author ? `Por ${element.author}` : element.epigraph}
          </Typography>
          <Typography className={classes.otherText}>{element.text}</Typography>
          <Grid className={classes.gridButton}>
            <Button
              buttonText={buttonText}
              isExternal={isExternal}
              link={element.link}
            />
            <Typography className={classes.addedText}>
              <em>{dateToString(element.date)}</em>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
