import React, { Component } from 'react'
import "./BudgetAppInputFormThree.css"
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';


export default class ResultsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          // DATA State
    chartData:{
        labels: ["Mortgage | Rent", "Car Payment", "Car Insurance", "Home Insurance", "Life Insurance", "Religious Offering | Charity", "Electric", "Water", "Phone", "Grocery", "Pet", "Childcare", "Clothing","Entertainment", "Other", "Eatting Out", "Internet", "Cable | Video Streaming Service"],
        datasets:[{
            label:"Money Spent",
            data:[
              this.props.mortgageRent,
              this.props.carPayment,
              this.props.carInsurance,
              this.props.homeInsurance,
              this.props.lifeInsurance,
              this.props.religiousGiving,
              this.props.electric,
              this.props.water,
              this.props.phone,
              this.props.grocery,
              this.props.pet,
              this.props.childcare,
              this.props.clothing,
              this.props.entertainment,
              this.props.other,
              this.props.eattingOut,
              this.props.internet,
              this.props.cable,
            ],
            backgroundColor:[
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
                "#76CE89",
            ]
        }]
    }
        }
    }

    pushToHomeAndResetSearch = () => {
        this.props.resetSearch()
        this.props.history.push("/MonthlyBudgetApp")
    }


    render () {

        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">Alright {this.props.name}.</h2>
                <h4 className="headerDesc">Monthly, you spend a total of ${this.props.totalExpenses}.<br></br>
                With the numbers you gave us you have ${this.props.amountLeft} left. </h4>
            </div>
                    <div  className="chart">
                        <Bar
                            data={this.state.chartData}
                            width={700}
                            height={450}
                            options={{
                            maintainAspectRatio: false,
                            scales:{
                                xAxes: [{
                                    ticks: {
                                        autoSkip: false
                                    }
                                }]
                            }
                            }}
                         />
                    </div>


                     <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark homeButton" onClick={this.pushToHomeAndResetSearch}>Home</button>
                    </div>
            </React.Fragment>
        )
    }
}