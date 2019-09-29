import React from "react";
import App from "./containers/App";
import ReactDOM from "react-dom";
const MOUNT_NODE = document.getElementById("app");
const APP_NAME = "Json Resume";

ReactDOM.render(<App name={APP_NAME} />, MOUNT_NODE);
