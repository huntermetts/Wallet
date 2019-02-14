import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar bg-dark flex-md-nowrap p-10 shadow">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link text-success navText font-weight-bold" to="/">W A L L E T.</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default NavBar
