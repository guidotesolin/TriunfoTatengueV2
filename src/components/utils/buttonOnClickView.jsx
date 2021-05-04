import React from "react";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import styles from "../../assets/styles/buttonStyles";

export default function ButtonOnClickView(props) {
  const { buttonText, loader, onClickFunction } = props;
  const classes = styles();

  return (
    <Button
      className={classes.button}
      disabled={loader}
      onClick={onClickFunction}
    >
      {loader ? (
        <CircularProgress size={20} />
      ) : (
        <Typography className={classes.text}>{buttonText}</Typography>
      )}
    </Button>
  );
}
