import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import BudgetApp from './BudgetApp/BudgetApp'

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route path="/" render={props => {
            return <BudgetApp {...props}
                   />
          }} />
      </React.Fragment>
    );
  }
}
