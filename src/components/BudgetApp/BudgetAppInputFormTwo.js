import React, { Component } from 'react'
import "./BudgetAppInputFormOne.css"

export default class BudgetAppInputFormTwo extends Component {

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">Alright {this.props.name}</h2>
                <h4 className="headerDesc">What do you spend on.</h4>
            </div>

                <div className="flexContainerForForm">

                </div>
            </React.Fragment>
        )
    }
}