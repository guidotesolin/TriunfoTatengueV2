import { makeStyles } from "@material-ui/core/styles";

const ImageCardStyles = makeStyles(() => {
  //const red = "#ef233c";
  const white = "#FFFFFF";
  const blue = "#085fb6";
  return {
    card: {
      width: "345px",
      height: "100%",
      transition: "transform 0.15s ease-in-out",
      "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
    bodyCard: {
      height: "100%",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
      background: "#ffffff",
      padding: "10px",
    },
    image: {
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
      maxWidth: "345px",
    },
    title: { fontFamily: "HelveticaNeueBold" },
    body: { fontFamily: "HelveticaNeueLight", fontSize: "20px" },
    divTag: { position: "relative" },
    tag: {
      color: white,
      position: "absolute",
      background: blue,
      padding: "5px",
      top: "5px",
      right: "3px",
      borderRadius: "10px",
      boxShadow:
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    },
  };
});

export default ImageCardStyles;
