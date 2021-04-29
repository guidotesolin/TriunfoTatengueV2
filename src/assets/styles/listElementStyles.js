import { makeStyles } from "@material-ui/core/styles";

const ListElementStyles = makeStyles((theme) => {
  return {
    flexGrid: { display: "flex" },
    imagePreview: { width: "125px", maxHeight: "150px", marginRight: "20px" },
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
    otherText: {
      fontSize: "20x",
      marginBottom: "10px",
      fontFamily: "HelveticaNeueLight",
    },
    gridButton: { marginTop: "5px", display: "flex", alignItems: "center" },
    addedText: { fontSize: "12px" },
  };
});

export default ListElementStyles;
