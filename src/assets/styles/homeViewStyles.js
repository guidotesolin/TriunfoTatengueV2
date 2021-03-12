import { makeStyles } from "@material-ui/core/styles";

const homeView = makeStyles((theme) => {
  return {
    tituloSeccion: {
      color: "#364d84",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    text: {
      fontFamily: "HelveticaNeueBold",
      fontSize: "23px",
      color: "#085fb6",
    },
    gridElement: { marginBottom: "30px" },
    videoContainer: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      paddingTop: "56.25%",
    },
    video: {
      position: "absolute",
      top: "0",
      left: "0",
      bottom: "0",
      right: "0",
      width: "100%",
      height: "100%",
    },
    image: {
      width: "80%",
      cursor: "pointer",
    },
  };
});

export default homeView;
