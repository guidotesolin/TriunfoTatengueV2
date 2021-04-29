import React from "react";
import { Button, Link as Redirect } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/buttonStyles";

export default function ButtonView(props) {
  const { buttonText, isExternal, link } = props;
  const classes = styles();

  return (
    <Button className={classes.button}>
      {isExternal ? (
        <Redirect
          rel="noopener noreferrer"
          target="_blank"
          href={link}
          className={classes.link}
          style={{ textDecoration: "none" }}
        >
          {buttonText}
        </Redirect>
      ) : (
        <Link
          to={link}
          className={classes.link}
          style={{ textDecoration: "none" }}
        >
          {buttonText}
        </Link>
      )}
    </Button>
  );
}
