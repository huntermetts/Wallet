import React, { Component } from 'react'
import "./BudgetAppInputFormTwo.css"
import { Progress } from 'reactstrap';

export default class BudgetAppInputFormTwo extends Component {

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">Alright {this.props.name}.</h2>
                <h4 className="headerDesc">Monthly, what do you spend on...</h4>
            </div>
                <div className="flexContainerForForm">
                    <form className="formContainer">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Mortgage | Rent:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="mortgageRent"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Car Payment:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="carPayment"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Car Insurance:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="carInsurance"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Home Insurance:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="homeInsurance"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Life Insurance:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="lifeInsurance"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Religious Offering | Charity:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="religiousGiving"placeholder="$0.00"></input>
                            </div>
                        </div>
                    </form>


                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark" onClick={() => this.props.history.push("/InputFormThree")}>Next page</button>
                    </div>

                    <div  className="centerProgress">
                        <div className="progressBar">
                            <Progress striped animated color="success" value="50" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}