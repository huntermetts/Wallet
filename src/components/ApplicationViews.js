import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import BudgetApp from './BudgetApp/BudgetApp'
import BudgetAppInputFormTwo from './BudgetApp/BudgetAppInputFormTwo'
import BudgetAppInputFormThree from './BudgetApp/BudgetAppInputFormThree'
import BudgetAppInputFormFour from './BudgetApp/BudgetAppInputFour'
import ResultsPage from './BudgetApp/ResultsPage'

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
    cable:'',

    // Totals:
    totalExpenses:'',
    amountLeft:''
  }


    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    resetSearch = () => {
      this.setState({name:''});
      this.setState({monthlyIncome:''})
      this.setState({mortgageRent:''})
      this.setState({carPayment:''})
      this.setState({homeInsurance:''})
      this.setState({lifeInsurance:''})
      this.setState({religiousGiving:''})
      this.setState({electric:''})
      this.setState({water:''})
      this.setState({phone:''})
      this.setState({grocery:''})
      this.setState({childcare:''})
      this.setState({pet:''})
      this.setState({clothing:''})
      this.setState({entertainment:''})
      this.setState({other:''})
      this.setState({eattingOut:''})
      this.setState({internet:''})
      this.setState({cable:''})
      this.setState({totalExpenses:''})
      this.setState({amountLeft:''})
      console.log("something worked")
    }


  calculateTotalExpenses = () => {
    let totalExpenses = ((+this.state.mortgageRent + +this.state.carPayment + +this.state.carInsurance + +this.state.homeInsurance + +this.state.lifeInsurance + +this.state.religiousGiving + +this.state.electric + +this.state.water + +this.state.phone + +this.state.grocery + +this.state.childcare + +this.state.pet + +this.state.clothing + +this.state.entertainment + +this.state.other + +this.state.eattingOut + +this.state.internet + +this.state.cable))
    console.log("the total expenses are:" + totalExpenses)

    this.setState({
        totalExpenses: totalExpenses
      })
 }

 calculateTotalAmountLeft = () => {
  let amountLeft = (+this.state.monthlyIncome - (+this.state.mortgageRent + +this.state.carPayment + +this.state.carInsurance + +this.state.homeInsurance + +this.state.lifeInsurance + +this.state.religiousGiving + +this.state.electric + +this.state.water + +this.state.phone + +this.state.grocery + +this.state.childcare + +this.state.pet + +this.state.clothing + +this.state.entertainment + +this.state.other + +this.state.eattingOut + +this.state.internet + +this.state.cable))
  console.log("the total amount left is:" + amountLeft)

  this.setState({
      amountLeft:amountLeft
    })
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

          <Route exact path="/InputFormFour" render={props => {
            return <BudgetAppInputFormFour {...props}
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

            // Page 4 state being passed
            clothing={this.state.clothing}
            entertainment={this.state.entertainment}
            other={this.state.other}
            eattingOut={this.state.eattingOut}
            internet={this.state.internet}
            cable={this.state.cable}

            calculateTotalExpenses={this.calculateTotalExpenses}
            totalExpenses={this.state.totalExpenses}
            calculateTotalAmountLeft={this.calculateTotalAmountLeft}
                   />
          }} />



          <Route exact path="/ResultsPage" render={props => {
            return <ResultsPage {...props}
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

            // Page 4 state being passed
            clothing={this.state.clothing}
            entertainment={this.state.entertainment}
            other={this.state.other}
            eattingOut={this.state.eattingOut}
            internet={this.state.internet}
            cable={this.state.cable}

            // Totals
            calculateTotalExpenses={this.calculateTotalExpenses}
            totalExpenses={this.state.totalExpenses}
            amountLeft={this.state.amountLeft}

            // Reset search
            resetSearch={this.resetSearch}
                   />
          }} />
      </React.Fragment>
    );
  }
}
