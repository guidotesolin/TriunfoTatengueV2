import React from "react";
import { Typography, Grid, Link as Redirect } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/imageCardStyles";

export default function ImageCardView(props) {
  const { url, image, altImage, title, description, tag, link } = props;
  const classes = styles();

  if (link) {
    return (
      <Redirect
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className={classes.link}
        style={{ textDecoration: "none" }}
      >
        <Grid className={classes.card}>
          <Grid>
            <div className={classes.divTag}>
              <Typography className={classes.tag}>{tag}</Typography>
              <img src={image} alt={altImage} className={classes.image} />
            </div>
            <Grid className={classes.bodyCard}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.body}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Redirect>
    );
  } else {
    return (
      <Link
        to={url}
        style={{ textDecoration: "none" }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <Grid className={classes.card}>
          <Grid>
            <div className={classes.divTag}>
              <Typography className={classes.tag}>{tag}</Typography>
              <img src={image} alt={altImage} className={classes.image} />
            </div>
            <Grid className={classes.bodyCard}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.body}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Link>
    );
  }
}

/* Previous version
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link as Redirect,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/imageCardStyles";

export default function ImageCardView(props) {
  const { url, image, altImage, title, description, tag, link } = props;
  const classes = styles();

  if (link) {
    return (
      <Redirect
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className={classes.link}
        style={{ textDecoration: "none" }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <div className={classes.divTag}>
              <Typography className={classes.tag}>{tag}</Typography>
              <CardMedia
                image={image}
                title={altImage}
                className={classes.image}
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.body}
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Redirect>
    );
  } else {
    return (
      <Link
        to={url}
        style={{ textDecoration: "none" }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <div className={classes.divTag}>
              <Typography className={classes.tag}>{tag}</Typography>
              <CardMedia
                image={image}
                title={altImage}
                className={classes.image}
              />
            </div>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.body}
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
}
 */
