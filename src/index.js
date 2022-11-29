import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./gifExpertApp";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
