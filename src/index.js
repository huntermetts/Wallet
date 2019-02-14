import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Wallet from './components/Wallet'
import './index.css'

ReactDOM.render(
  <Router>
      <Wallet />
  </Router>
  , document.getElementById('root'))
