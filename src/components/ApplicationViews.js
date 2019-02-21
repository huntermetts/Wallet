import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import BudgetApp from './BudgetApp/BudgetApp'
import BudgetAppInputFormTwo from './BudgetApp/BudgetAppInputFormTwo'
import BudgetAppInputFormThree from './BudgetApp/BudgetAppInputFormThree'
import BudgetAppInputFormFour from './BudgetApp/BudgetAppInputFour'
import ResultsPage from './BudgetApp/ResultsPage'
import BudgetAppHomePage from './BudgetApp/BudgetAppHomePage'
import CashWishlistApp from './BudgetApp/CashWishlistApp'
import CashWishlistAppPageTwo from './BudgetApp/CashWishlistAppPageTwo'
import CashWishlistAppResults from './BudgetApp/CashWishlistAppResults'


export default class ApplicationViews extends Component {

  state = {
    // Page 1
    name:'',
    monthlyIncome:0,
    // Page 2
    mortgageRent:0,
    carPayment:0,
    carInsurance:0,
    homeInsurance:0,
    lifeInsurance:0,
    religiousGiving:0,
    // Page 3
    electric:0,
    water:0,
    phone:0,
    grocery:0,
    childcare:0,
    pet:0,
    // Page 4
    clothing:0,
    entertainment:0,
    other:0,
    eattingOut:0,
    internet:0,
    cable:0,

    // Totals:
    totalExpenses:0,
    amountLeft:0,


    // State for Wishlist app:
    itemToPurchase:"",
    itemToPurchasePrice:0,
    selects:"Yearly",
    typeOfSaving:""
  }

  checkSelects = () => {
    if (this.state.selects === "Yearly"){
      this.setState({typeOfSaving:"year(s)"});
    } else if (this.state.selects === "Monthly"){
      this.setState({typeOfSaving:"month(s)"});
    } else if (this.state.selects === "Daily"){
      this.setState({typeOfSaving:"day(s)"});
    }

    console.log(this.state.typeOfSaving)

  }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    resetSearch = () => {
      this.setState({name:''});
      this.setState({monthlyIncome:0})
      this.setState({mortgageRent:0})
      this.setState({carPayment:0})
      this.setState({homeInsurance:0})
      this.setState({lifeInsurance:0})
      this.setState({religiousGiving:0})
      this.setState({electric:0})
      this.setState({water:0})
      this.setState({phone:0})
      this.setState({grocery:0})
      this.setState({childcare:0})
      this.setState({pet:0})
      this.setState({clothing:0})
      this.setState({entertainment:0})
      this.setState({other:0})
      this.setState({eattingOut:0})
      this.setState({internet:0})
      this.setState({cable:0})
      this.setState({totalExpenses:0})
      this.setState({amountLeft:0})
      this.setState({itemToPurchase:""})
      this.setState({itemToPurchasePrice:0})
      this.setState({selects:"Yearly"})
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
        <Route exact path="/MonthlyBudgetApp" render={props => {
            return <BudgetApp {...props}
            handleFieldChange={this.handleFieldChange}
                   />
          }} />

          <Route exact path="/" render={props => {
            return <BudgetAppHomePage {...props}
            handleFieldChange={this.handleFieldChange}
                   />
          }} />

          <Route exact path="/CashWishlistApp" render={props => {
            return <CashWishlistApp {...props}
            handleFieldChange={this.handleFieldChange}
                   />
          }} />

           <Route exact path="/CashWishlistAppPageTwo" render={props => {
            return <CashWishlistAppPageTwo {...props}
            handleFieldChange={this.handleFieldChange}
            name={this.state.name}
            itemToPurchase={this.state.itemToPurchase}
            itemToPurchasePrice={this.state.itemToPurchasePrice}
            selects={this.state.selects}
            checkSelects={this.checkSelects}
                   />
          }} />

          <Route exact path="/CashWishlistAppResults" render={props => {
            return <CashWishlistAppResults {...props}
            handleFieldChange={this.handleFieldChange}
            name={this.state.name}
            itemToPurchase={this.state.itemToPurchase}
            itemToPurchasePrice={this.state.itemToPurchasePrice}
            selects={this.state.selects}
            typeOfSaving={this.state.typeOfSaving}
            checkSelects={this.checkSelects}
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

            // Passing the dataset for the chart:
            chartData={this.state.chartData}
                   />
          }} />
      </React.Fragment>
    );
  }
}
