import React, { Component } from 'react'
import "./BudgetApp.css"
import { Progress } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

export default class BudgetApp extends Component {

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">W A L L E T.</h2>
                <h4 className="headerDesc">Monthy expense tracker</h4>
            </div>

                <div className="flexContainerForForm">
                    <form className="formContainer">
                        <div className="row">

                            <div className="col">
                                <label htmlFor="name">Your Name:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="name"placeholder="First Name"></input>
                                <small id="name" className="form-text text-muted">Don't worry, we wont't send you any form of messages or adds. <br></br> We only use your name to make your experience more customized.</small>
                            </div>

                            <div className="col">
                                <label htmlFor="monthlyIncome">Your monthly income:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="monthlyIncome" placeholder="$0.00"></input>
                                <small id="monthlyIncome" className="form-text text-muted">Please enter all values in these fields as numbers ONLY or the <br></br>  calculations will not be able to work properly.</small>

                            </div>

                        </div>
                    </form>

                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark" onClick={() => this.props.history.push("/InputFormTwo")}>Let's do this</button>
                    </div>

                    <div  className="centerProgress">
                        <div className="progressBar">
                            <Progress striped animated color="success" value="25" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}