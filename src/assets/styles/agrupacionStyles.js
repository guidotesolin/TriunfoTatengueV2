import { makeStyles } from "@material-ui/core/styles";

const AgrupacionStyles = makeStyles((theme) => {
  const { breakpoints } = theme;
  return {
    tituloSeccion: {
      color: "#364d84",
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    carosuel: {
      marginBottom: "30px",
      width: "80vh",
      [breakpoints.down(770)]: {
        width: "70vh",
      },
    },
    carosuelImage: {
      maxWidth: "80vh",
      [breakpoints.down(770)]: {
        maxWidth: "50vh",
      },
    },
    text: {
      marginBottom: "10px",
      fontFamily: "HelveticaNeueLight",
      fontSize: "20px",
    },
  };
});

export default AgrupacionStyles;
