import { makeStyles } from "@material-ui/core/styles";

const ContactoStyles = makeStyles((theme) => {
  return {
    tituloSeccion: {
      color: "#364d84",
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    contactText: {
      marginBottom: "15px",
      fontFamily: "HelveticaNeueLight",
      fontSize: "20px",
    },
    contactoGrid: { textAlign: "center" },
    fieldsGrid: { width: "70%" },
    mediumGrid:{width: "50%"},
    fieldsContainer: { marginTop: "5px", marginBottom: "5px", width: "100%" },
    texfield: {
      marginTop: "15px",
      paddingLeft: "10px",
      background: "#FFFFFF",
      paddingTop: "2px",
      border: "1px solid #FF0000",
      borderRadius: "5px",
    },
    button: {
      minWidth: "120px",
      height: "30px",
      borderRadius: "18px",
      backgroundColor: "#FF0000",
      marginRight: "15px",
      "&:hover": {
        backgroundColor: "#FFFFFF",
      },
    },
    redText: { color: "#FF0000" },
    buttonText: {
      paddingRight: "5px",
      paddingLeft: "5px",
      textTransform: "none",
      textDecoration: "none",
      color: "#FFFFFF",
      "&:hover": {
        color: "#FF0000",
      },
    },
  };
});

export default ContactoStyles;
