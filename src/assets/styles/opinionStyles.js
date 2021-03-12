import { makeStyles } from "@material-ui/core/styles";

const OpinionStyles = makeStyles((theme) => {
  return {
    tituloSeccion: {
      color: "#364d84",
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    gridOpinion: { display: "flex" },
    gridImage: { minWidth: "160px", textAlign: "center", paddingRight: "15px" },
    preview: { width: "125px", maxHeight: "150px", marginRight: "20px" },
    divider: { marginTop: "15px", marginBottom: "15px" },
    title: {
      fontSize: "23px",
      color: "#085fb6",
      fontWeight: "600",
      fontFamily: "HelveticaNeueBold",
    },
    epigraph: {
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "10px",
      marginBottom: "10px",
      fontFamily: "HelveticaNeueLight",
    },
    text: {
      fontSize: "20x",
      fontFamily: "HelveticaNeueLight",
    },
    button: {
      borderRadius: "18px",
      backgroundColor: "#FF0000",
      marginRight: "15px",
      "&:hover": {
        backgroundColor: "#FFFFFF",
      },
    },
    link: {
      paddingRight: "5px",
      paddingLeft: "5px",
      textTransform: "none",
      textDecoration: "none",
      color: "#FFFFFF",
      "&:hover": {
        color: "#FF0000",
      },
    },
    addedText: { fontSize: "12px" },
    pagination: {
      background: "none",
      dotActive: {
        backgroundColor: "#FF0000",
      },
    },
    paginationButton: { color: "#FF0000" },
    textoDesarrollo: {
      fontSize: "20px",
      marginBottom: "10px",
      fontFamily: "HelveticaNeueLight",
    },
    textoLista: {
      fontFamily: "HelveticaNeueBold",
      marginBottom: "3px",
    },
  };
});

export default OpinionStyles;
