import React, { Component } from 'react'
import "./BudgetAppInputFormThree.css"
import { Progress } from 'reactstrap';

export default class ResultsPage extends Component {

    pushToHomeAndResetSearch = () => {
        this.props.resetSearch()
        this.props.history.push("/")
    }


    render () {

        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">Alright {this.props.name}.</h2>
                <h4 className="headerDesc">Monthly, you spend a total of ${this.props.totalExpenses}.<br></br>
                With the numbers you gave us you have ${this.props.amountLeft} left. </h4>
            </div>
                <div className="flexContainerForForm">
                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark" onClick={this.pushToHomeAndResetSearch}>Home</button>
                    </div>

                    {/* <div  className="centerProgress">
                        <div className="progressBar">
                            <Progress striped animated color="success" value="100" />
                        </div>
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
}