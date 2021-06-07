import { makeStyles } from "@material-ui/core/styles";

const ListPageStyles = makeStyles(() => {
  const red = "#ef233c";
  //const white = "#FFFFFF";
  //const blue = "#085fb6";
  return {
    gridRoot: { justifyContent: "center", paddingBottom: "10px" },
    tituloSeccion: {
      color: red,
      marginBottom: "30px",
      fontSize: "30px",
      fontFamily: "Futura",
    },
    gridPagination: { marginTop: "15px" },
    pagination: {
      "& .MuiMobileStepper-dotActive": { backgroundColor: red },
    },
    paginationButton: { color: red },
  };
});
export default ListPageStyles;
