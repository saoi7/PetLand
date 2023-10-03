import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./styles.css";
//import CssBaseline from "@mui/material/CssBaseline";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
