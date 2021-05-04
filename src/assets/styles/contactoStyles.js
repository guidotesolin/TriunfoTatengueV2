import { makeStyles } from "@material-ui/core/styles";

const ContactoStyles = makeStyles(() => {
  //const red = "#ef233c";
  const blue = "#085fb6";
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
    blueText: {
      marginBottom: "15px",
      fontFamily: "HelveticaNeueLight",
      fontSize: "20px",
      color: blue,
      fontWeight: "600",
    },
    fieldsGrid: { width: "70%" },
    mediumGrid: { width: "50%" },
    fieldsContainer: { marginTop: "5px", marginBottom: "5px", width: "100%" },
    redText: { color: "#FF0000" },
  };
});

export default ContactoStyles;
