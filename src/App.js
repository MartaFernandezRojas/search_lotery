import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SelectLib from "./components/SelectLib/SelectLib";
import Header from "./components/Header/Header";
import Index from "./components/Index/Index";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <SelectLib />
    </div>
  );
}
