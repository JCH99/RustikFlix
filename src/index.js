import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StyledEngineProvider } from "@mui/material/styles";
import GenresContextProvider from "./context/GenresContextProvider";
import MaterialThemeProvider from "./context/MaterialThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MaterialThemeProvider>
        <GenresContextProvider>
          <App />
        </GenresContextProvider>
      </MaterialThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
