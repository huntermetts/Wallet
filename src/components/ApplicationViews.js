import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import BudgetApp from './BudgetApp/BudgetApp'
import BudgetAppInputFormTwo from './BudgetApp/BudgetAppInputFormTwo'

export default class ApplicationViews extends Component {

  state = {
    name:'',
    monthlyIncome:''
  }


    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
  }


  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={props => {
            return <BudgetApp {...props}
            handleFieldChange={this.handleFieldChange}
                   />
          }} />


          <Route exact path="/InputFormTwo" render={props => {
            return <BudgetAppInputFormTwo {...props}
                   />
          }} />



      </React.Fragment>
    );
  }
}
