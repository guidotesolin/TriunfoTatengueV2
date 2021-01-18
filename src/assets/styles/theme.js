import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  colors: {
    section: "#364d84",
  },
  palette: {
    common: {
      roseColor: "#e91e63",
      grayColor: "#D9E0E7",
      inputBackground: "#F5F7FA",
      flashCard: "##F9EAC8",
    },
    primary: {
      main: "#052D30",
      light: "#4B8B94",
      hover: "#153B40",
      lightHover: "#4D9CA4",
      line: "#294B54",
    },
    secondary: {
      main: "#E5AA25",
      light: "#EFBD4F",
      line: "#294B54",
    },
    error: {
      main: "#EA2F41",
      light: "rgba(234,47,65,0.3)",
    },
    warning: {
      main: "#F5F7FA",
    },
    info: {
      main: "#00acc1",
    },
    success: {
      main: "#A0CE3C",
    },
    text: {
      primary: "#052D30",
      secondary: "#7C9099",
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    htmlFontSize: 16,
    fontSize: 12,
    fontWeightRegular: "400",
    pxToRem: (size) => `${size / 16}rem`,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1680,
    },
  },
});

export default theme;
