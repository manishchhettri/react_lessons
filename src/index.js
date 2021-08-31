import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Heading />
  </StrictMode>,
  rootElement
);
