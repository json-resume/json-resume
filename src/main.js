/**
 * main.js
 * 
 * entry file for the app
 */
import React from "react";
import ReactDOM from "react-dom";

// root app
import App from "./containers/App";

const MOUNT_NODE = document.getElementById("app");
const APP_NAME = "Json Resume";

ReactDOM.render(<App name={APP_NAME} />, MOUNT_NODE);
