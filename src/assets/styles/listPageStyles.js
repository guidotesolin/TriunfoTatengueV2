import { makeStyles } from "@material-ui/core/styles";

const ListPageStyles = makeStyles((theme) => {
  return {
    gridRoot: { justifyContent: "center", paddingBottom: "10px" },
    tituloSeccion: {
      color: "#ef233c",
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    divider: { marginTop: "15px", marginBottom: "15px" },
    gridPagination: { marginTop: "15px" },
    pagination: {
      background: "none",
      "& .MuiMobileStepper-dotActive": { backgroundColor: "#FF0000" },
    },
    paginationButton: { color: "#FF0000" },
  };
});
export default ListPageStyles;
