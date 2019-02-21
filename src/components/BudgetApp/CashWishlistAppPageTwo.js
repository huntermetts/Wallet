import React, { Component } from 'react'
import "./CashWishlistApp.css"
import { Progress } from 'reactstrap';

export default class CashWishlistAppPageTwo extends Component {

    calculateAndPush = () => {
        this.props.checkSelects()
        this.props.history.push("/CashWishlistAppResults")
      }

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">Alright {this.props.name}.</h2>
                <h4 className="headerDesc">You wanna buy a {this.props.itemToPurchase} worth ${this.props.itemToPurchasePrice}.</h4>
            </div>

                <div>
                <h4 className="headerDesc centerText">How much would you need to save...</h4>
                    <div className="centerSelects">

                            <select id="selects" onChange={this.props.handleFieldChange} className="form-control selects">
                                <option value="Yearly">Yearly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Daily">Daily</option>
                            </select>

                    </div>

                    <h4 className="headerDesc centerText lowerText"> to pay this item off in cash?</h4>

                    <div className="stepOneButtonContainer buttonSpacing">
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