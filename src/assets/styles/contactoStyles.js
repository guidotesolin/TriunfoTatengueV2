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
    texfield: { marginTop: "15px", marginRigth: "10px", marginLeft: "10px" },
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
