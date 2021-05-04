import { makeStyles } from "@material-ui/core/styles";

const ContactoStyles = makeStyles(() => {
  return {
    root: { textAlign: "center", paddingBottom: "10px" },
    tituloSeccion: {
      color: "#ef233c",
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    contactText: {
      marginBottom: "15px",
      fontFamily: "HelveticaNeueLight",
      fontSize: "20px",
    },
    fieldsGrid: { width: "70%" },
    mediumGrid: { width: "50%" },
    fieldsContainer: { marginTop: "5px", marginBottom: "5px", width: "100%" },
    texfield: {
      marginTop: "15px",
      paddingLeft: "10px",
      background: "#FFFFFF",
      paddingTop: "2px",
      border: "1px solid #FF0000",
      borderRadius: "5px",
      transition: "border .3s",
      "&:hover": {
        outline: "none",
        border: "2px solid #FF0000",
      },
    },
    redText: { color: "#FF0000" },
  };
});

export default ContactoStyles;
