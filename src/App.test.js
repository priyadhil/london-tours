import React from "react";
import ReactDOM from "react-dom";
//import App from './App';
import Tour from "./Tour";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Tour />, div);
  ReactDOM.unmountComponentAtNode(div);
});
