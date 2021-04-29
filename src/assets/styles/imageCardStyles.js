import { makeStyles } from "@material-ui/core/styles";

const ImageCardStyles = makeStyles((theme) => {
  return {
    card: { width: "345px" },
    image: { height: "140px" },
    title: { fontFamily: "HelveticaNeueBold" },
    body: { fontFamily: "HelveticaNeueLight", fontSize: "20px" },
    divTag: { position: "relative" },
    tag: {
      color: "#FFFFFF",
      position: "absolute",
      background: "#364d84",
      padding: "5px",
      top: "5px",
      right: "1px",
      borderRadius: "10px",
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    },
  };
});

export default ImageCardStyles;