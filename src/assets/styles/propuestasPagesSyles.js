import { makeStyles } from "@material-ui/core/styles";

const PropuestasPageStyles = makeStyles((theme) => {
  return {
    tituloSeccion: { color: "#364d84", marginBottom: "30px", fontSize: "30px" },
    downloadButton: {
      borderRadius: "18px",
      backgroundColor: "#FF0000",
      marginRight: "15px",
      "&:hover": {
        backgroundColor: "#FFFFFF",
      },
    },
    asambleaImages: {
      maxWidth: "60vh",
      marginTop: "10px",
      marginBottom: "10px",
    },
    textButton: {
      paddingRight: "5px",
      paddingLeft: "5px",
      textTransform: "none",
      textDecoration: "none",
      color: "#FFFFFF",
      "&:hover": {
        color: "#FF0000",
      },
      "&:.MuiLink-underlineHover:hover ": {
        textDecoration: "none",
      },
    },
  };
});

export default PropuestasPageStyles;
