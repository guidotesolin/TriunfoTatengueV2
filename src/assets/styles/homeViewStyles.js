import { makeStyles } from "@material-ui/core/styles";

const HomeStyles = makeStyles(() => {
  const red = "#ef233c";
  //const white = "#FFFFFF";
  //const blue = "#085fb6";
  return {
    root: { justifyContent: "center" },
    gridElement: { marginBottom: "30px" },
    tituloSeccion: {
      color: red,
      fontSize: "30px",
      fontFamily: "Futura",
    },
    videoGrid: { width: "80%", marginBottom: "30px" },
    text: {
      fontFamily: "HelveticaNeueBold",
      fontSize: "23px",
      color: red,
    },
    imageResponsive: { width: "100%" },
  };
});

export default HomeStyles;
