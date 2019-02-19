import React, { Component } from 'react'
import "./BudgetAppHomePage.css"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, CardDeck } from 'reactstrap';



export default class BudgetAppHomePage extends Component {

    render () {
        return (
            <React.Fragment>
            <div className="walletHeader text-success">
                <h2 className="walletBold font-weight-bold">W A L L E T.</h2>
                <h4 className="headerDesc">Budgeting like it should be.</h4>
            </div>


           <CardDeck className="cardDeckSpacing">
      <Card className="cardSpacing">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Monthly Expense Tracker</strong></CardTitle>
          <CardText>Simply enter your monthly income and expenses to see where your money is going.</CardText>
          <Button>Take me there</Button>
        </CardBody>
      </Card>
      <Card className="cardSpacing">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Retirement Calculator</strong></CardTitle>
          <CardText>Enter your current age and the age you want to retire at. We'll take care of the rest.</CardText>
          <Button>Take me there</Button>
        </CardBody>
      </Card>
      <Card className="cardSpacing">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle><strong>Cash Wishlist</strong></CardTitle>
          <CardText>Enter an item you're wanting buy and see just how much money you need to save yearly, monthly, or daily, to purchase it in cash. </CardText>
          <Button>Take me there</Button>
        </CardBody>
      </Card>
    </CardDeck>

    <footer>
    © 2019 HunterMettsDevelopment
    </footer>
            </React.Fragment>
        )
    }
}