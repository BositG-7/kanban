// import React from "react";
import ReactDOM from "react-dom/client";
// import "./assets/css/root.scss";
// import "./assets/css/fonts.scss";
import "./assets/css/main.scss";
import "./assets/css/index.css";
import "./assets/css/disable-zoom.css";

// import App from "./App";
import MainRouter from "./router";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<MainRouter />);
