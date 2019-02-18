import React, { Component } from 'react'
import "./BudgetAppInputFormThree.css"
import { Progress } from 'reactstrap';

export default class BudgetAppInputFormThree extends Component {

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">Awesome! Lets keep going.</h2>
                <h4 className="headerDesc">Monthly, what do you spend on...</h4>
            </div>
                <div className="flexContainerForForm">
                    <form className="formContainer">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Electric:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="electric"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Water:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="water"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Phone:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="phone"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Grocery:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="grocery"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Pet:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="pet"placeholder="$0.00"></input>
                            </div>

                            <div className="col">
                                <label htmlFor="name">Childcare:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="childcare"placeholder="$0.00"></input>
                            </div>
                        </div>
                    </form>


                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark" onClick={() => this.props.history.push("/InputFormFour")}>Next page</button>
                    </div>

                    <div  className="centerProgress">
                        <div className="progressBar">
                            <Progress striped animated color="success" value="75" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}