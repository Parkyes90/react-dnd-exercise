import React from "react";
import ReactDOM from "react-dom";
// import "@atlaskit/css-reset";

import Board from "./Board";
import { observe } from "./Game";
observe((knightPosition) =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById("root")
  )
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
