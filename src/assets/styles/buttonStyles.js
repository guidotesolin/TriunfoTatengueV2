import { makeStyles } from "@material-ui/core/styles";

const buttonStyles = makeStyles(() => {
  const red = "#ef233c";
  const white = "#FFFFFF";
  const blue = "#085fb6";
  return {
    button: {
      borderRadius: "18px",
      backgroundColor: "none",
      border: `1px solid ${red}`,
      outline: "none",
      "&:hover": {
        border: `1px solid ${blue}`,
        backgroundColor: white,
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
    text: {
      fontWeight: "600",
      paddingRight: "5px",
      paddingLeft: "5px",
      textTransform: "none",
      textDecoration: "none",
      color: "#ef233c",
      "&:hover": {
        color: "#FF0000",
      },
    },
  };
});

export default buttonStyles;
