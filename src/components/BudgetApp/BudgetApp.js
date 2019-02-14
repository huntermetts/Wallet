import React, { Component } from 'react'
import "./BudgetApp.css"
import { Progress } from 'reactstrap';

export default class BudgetApp extends Component {

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">W A L L E T.</h2>
                <h4 className="headerDesc">Monthy budgeting like it should be.</h4>
            </div>

                <div className="flexContainerForForm">
                    <form className="formContainer">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Your Name:</label>
                                <input type="text" required="true" onChange={this.props.handleFieldChange} className="form-control" id="name"placeholder="Name"></input>
                                <small id="name" class="form-text text-muted">Don't worry, we wont't send you any form of messages or adds. <br></br> We only use your name to make your experience more customized.</small>
                            </div>

                            <div className="col">
                                <label htmlFor="monthlyIncome">Your monthly income:</label>
                                <input type="text" required="true" onChange={this.props.handleFieldChange} className="form-control" id="monthlyIncome" placeholder="$4500"></input>
                            </div>
                        </div>
                    </form>

                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark" onClick={() => this.props.history.push("/InputFormTwo")}>Let's do this</button>
                    </div>

                    <div  className="centerProgress">
                        <div className="progressBar">
                            <Progress striped animated color="success" value="6.25" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}