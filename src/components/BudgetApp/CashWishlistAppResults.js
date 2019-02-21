import React, { Component } from 'react'
import "./CashWishlistApp.css"
import { Progress } from 'reactstrap';

export default class CashWishlistAppResults extends Component {


    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold"> {this.props.name}, </h2>
                <h4 className="headerDesc">You wanna buy a {this.props.itemToPurchase} worth ${this.props.itemToPurchasePrice}.</h4>
            </div>
            </React.Fragment>
        )
    }
}