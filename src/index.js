import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./assets/scss/main.scss";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
