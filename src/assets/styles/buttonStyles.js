import { makeStyles } from "@material-ui/core/styles";

const buttonStyles = makeStyles((theme) => {
  const red = "#ef233c";
  const white = "#FFFFFF";
  const blue = "#085fb6";
  return {
    button: {
      borderRadius: "18px",
      marginRight: "15px",
      backgroundColor: white,
      border: `1px solid ${red}`,
      "&:hover": {
        border: `1px solid ${blue}`,
      },
    },
    link: {
      fontWeight: "600",
      paddingRight: "5px",
      paddingLeft: "5px",
      textTransform: "none",
      textDecoration: "none",
      color: "#ef233c",
      "&:hover": {
        color: "#FF0000",
      },
      "& .MuiLink-underlineHover:hover": { textDecoration: "none" },
    },
  };
});

export default buttonStyles;
