import { makeStyles } from "@material-ui/core/styles";

const GeneralPagesStyles = makeStyles(() => {
  const red = "#ef233c";
  // const white = "#FFFFFF";
  //const blue = "#085fb6";
  return {
    root: { marginBottom: "10px" },
    centerText: { textAlign: "center" },
    centerGrid: { textAlign: "-webkit-center" },
    tituloSeccion: {
      color: red,
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    gridSeparation: { marginBottom: "10px" },
    imageResponsive: { maxWidth: "60vh", marginBottom: "20px" },
    textoDesarrollo: {
      fontSize: "20px",
      marginBottom: "10px",
      fontFamily: "HelveticaNeueLight",
    },
    pdfViewer: {
      marginTop: "20px",
      marginBottom: "20px",
      height: "500px",
      maxHeight: "500px",
      minWidth: "300px",
      width: "80vh",
    },
    textoLista: {
      fontFamily: "HelveticaNeueBold",
    },
    userAvatar: { height: "50px", width: "50px", marginRight: "15px" },
    imageGrid: { width: "100%" },
    facebookVideo: { border: "none", overflow: "hidden" },
  };
});

export default GeneralPagesStyles;
