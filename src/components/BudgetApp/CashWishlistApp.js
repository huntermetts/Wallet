import React, { Component } from 'react'
import "./CashWishlistApp.css"
import { Progress } from 'reactstrap';

export default class CashWishlistApp extends Component {

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">W A L L E T.</h2>
                <h4 className="headerDesc">Cash Wishlist</h4>
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
                                <label htmlFor="itemToPurchase">Item you'd like to purchase:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="itemToPurchase" placeholder="Motorcycle"></input>
                            </div>

                              <div className="col">
                                <label htmlFor="itemToPurchasePrice">Price of the item:</label>
                                <input type="text" required={true} onChange={this.props.handleFieldChange} className="form-control" id="itemToPurchasePrice" placeholder="$0.00"></input>
                                <small id="itemToPurchasePrice" className="form-text text-muted">Please enter all values in this field as numbers ONLY or the <br></br>  calculations will not be able to work properly.</small>
                            </div>

                        </div>
                    </form>

                    <div className="stepOneButtonContainer">
                        <button type="submit" className="btn btn-success text-dark" onClick={() => this.props.history.push("/CashWishlistAppPageTwo")}>Let's do this</button>
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