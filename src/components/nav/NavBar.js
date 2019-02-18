import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {

    resetSearch = () => {
        this.setState({name:''});
        this.setState({monthlyIncome:''})
        this.setState({mortgageRent:''})
        this.setState({carPayment:''})
        this.setState({homeInsurance:''})
        this.setState({lifeInsurance:''})
        this.setState({religiousGiving:''})
        this.setState({electric:''})
        this.setState({water:''})
        this.setState({phone:''})
        this.setState({grocery:''})
        this.setState({childcare:''})
        this.setState({pet:''})
        this.setState({clothing:''})
        this.setState({entertainment:''})
        this.setState({other:''})
        this.setState({eattingOut:''})
        this.setState({internet:''})
        this.setState({cable:''})
        this.setState({totalExpenses:''})
        this.setState({amountLeft:''})
        console.log("something worked")
      }


    render() {
        return (
            <nav className="navbar navbar bg-dark flex-md-nowrap p-10 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link text-success navText font-weight-bold" onClick={this.resetSearch} to="/">W A L L E T.</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default NavBar
