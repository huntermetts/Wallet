import React, { Component } from 'react'
import "./BudgetAppInputFormThree.css"
import { Progress } from 'reactstrap';

export default class BudgetAppInputFormFour extends Component {

    calculateAndPush = () => {
       this.props.calculateTotalAmountLeft()
       this.props.calculateTotalExpenses()
       this.props.history.push("/ResultsPage")
     }

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">Sweet. A few more questions.</h2>
                <h4 className="headerDesc">Monthly, what do you spend on...</h4>
            </div>
                <div className="flexContainerForForm">
                    <form className="formContainer">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Clothing:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="clothing"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Entertainment:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="entertainment"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Eatting Out:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="eattingOut"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Internet:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="internet"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Cable | Video Subscription Services:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="cable"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Other:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="other"placeholder="$0.00"></input>
                            </div>
                        </div>
                    </form>


                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark" onClick={this.calculateAndPush}>Submit</button>
                    </div>

                    <div  className="centerProgress">
                        <div className="progressBar">
                            <Progress striped animated color="success" value="100" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}