import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import { List } from "./Heading";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Heading />
    <List />
    <App />
  </StrictMode>,
  rootElement
);
