import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// color palette according to hero header colors ("red" pill, "blue" pill)
export const themeOptions = {
  palette: {
    primary: {
      main: "#3ab5e7",
    },
    secondary: {
      main: "#ce3734",
    },
  },
};

const theme = createTheme(themeOptions);

const MaterialThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MaterialThemeProvider;
