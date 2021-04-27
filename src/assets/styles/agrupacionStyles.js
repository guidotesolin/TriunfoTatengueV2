import { makeStyles } from "@material-ui/core/styles";

const AgrupacionStyles = makeStyles((theme) => {
  const { breakpoints } = theme;
  return {
    root: { paddingBottom: "10px" },
    tituloSeccion: {
      color: "#364d84",
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    carosuelGrid: { textAlign: "center" },
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
      paddingLeft: "5px",
      paddingRight: "5px",
      marginBottom: "12px",
      fontFamily: "HelveticaNeueLight",
      fontSize: "20px",
    },
  };
});

export default AgrupacionStyles;
