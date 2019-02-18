import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import "./Wallet.css";
import ApplicationViews from './ApplicationViews'
import { Route, Redirect } from "react-router-dom";
import BudgetAppInputFormTwo from './BudgetApp/BudgetAppInputFormTwo'

class Nutshell extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default Nutshell;
