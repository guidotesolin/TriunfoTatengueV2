import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/imageCardStyles";

export default function ImageCardView(props) {
  const { url, image, altImage, title, description, tag } = props;
  const classes = styles();

  return (
    <Link to={url} style={{ textDecoration: "none" }}>
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
