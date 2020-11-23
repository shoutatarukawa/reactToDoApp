import React from "react";
import ReactDOM from "react-dom";
import Helper from "./helper/index";
import Index from "./components/index";

let __helper = new Helper();

ReactDOM.render(<Index />, __helper.__get_id("app"));