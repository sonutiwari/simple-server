import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/HomeComponent";
import Login from "./components/Login/LoginComponent.jsx";

ReactDOM.render(
  <Router>
    <Route component={Login} path="/login" />
    <Route component={Home} path="/home" />
  </Router>,
  document.getElementById("root")
);
