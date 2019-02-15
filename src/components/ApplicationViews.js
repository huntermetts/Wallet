import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import BudgetApp from './BudgetApp/BudgetApp'
import BudgetAppInputFormTwo from './BudgetApp/BudgetAppInputFormTwo'
import BudgetAppInputFormThree from './BudgetApp/BudgetAppInputFormThree'

export default class ApplicationViews extends Component {

  state = {
    // Page 1
    name:'',
    monthlyIncome:'',
    // Page 2
    mortgageRent:'',
    carPayment:'',
    carInsurance:'',
    homeInsurance:'',
    lifeInsurance:'',
    religiousGiving:'',
    // Page 3
    electric:'',
    water:'',
    phone:'',
    grocery:'',
    childcare:'',
    pet:'',
    // Page 4
    clothing:'',
    entertainment:'',
    other:'',
    eattingOut:'',
    internet:'',
    cable:''
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
            name={this.state.name}
            monthlyIncome={this.state.monthlyIncome}

            // Page 2 state being passed
            handleFieldChange={this.handleFieldChange}
            mortgageRent={this.state.mortgageRent}
            carPayment={this.state.carPayment}
            carInsurance={this.state.carInsurance}
            homeInsurance={this.state.homeInsurance}
            lifeInsurance={this.state.lifeInsurance}
            religiousGiving={this.state.religiousGiving}
                   />
          }} />


           <Route exact path="/InputFormThree" render={props => {
            return <BudgetAppInputFormThree {...props}
            name={this.state.name}
            monthlyIncome={this.state.monthlyIncome}

            // Page 2 state being passed
            handleFieldChange={this.handleFieldChange}
            mortgageRent={this.state.mortgageRent}
            carPayment={this.state.carPayment}
            carInsurance={this.state.carInsurance}
            homeInsurance={this.state.homeInsurance}
            lifeInsurance={this.state.lifeInsurance}
            religiousGiving={this.state.religiousGiving}

            // Page 3 state being passed
            electric={this.state.electric}
            water={this.state.water}
            phone={this.state.phone}
            grocery={this.state.grocery}
            childcare={this.state.childcare}
            pet={this.state.pet}
                   />
          }} />
      </React.Fragment>
    );
  }
}
