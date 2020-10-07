import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from "../components/Card";
// import './Portfolio.css';

class PortfolioPage extends Component {
  render() {
    return (
      <section className="portfolio_page">
        <Container className="text-center">
        <h1 className="text-center">Portfolio Page</h1>
        <Row>
          <Col xs="6">
            <Card 
              projectName={"project 1"}
              details={"Boozercise"}
              projectText={"Are you Exercising Enough To Offset Your Alcohol Consumption? This was a project using Jquery & API's."}
              githubHref={"https://github.com/angelask/Boozercise-ASK"}
              deployedHref={"https://doremus256.github.io/Boozercise-ABG/"}
              ></Card>
              
          </Col>
          <Col xs="6">
            <Card 
            projectName={"project 2"}
            details={"Scheduler"}
              projectText={"If you need help organizing? This was a Jquery/JavaScript assignment displaying an extended workday."}
              githubHref={"https://github.com/angelask/scheduler-ASK"}
              deployedHref={"https://angelask.github.io/scheduler-ASK"}
            ></Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Card
            projectName={"project 3"}
            details={"Fitness Code Quiz"}
              projectText={"Find out if you are a fitness Guru. This was a fun use of javascript to demonstrate the use of a timer in a quiz"}
              githubHref={"https://github.com/angelask/Code-Quiz-ASK"}
              deployedHref={"https://angelask.github.io/Code-Quiz-ASK/"}
            ></Card>
          </Col>
          <Col xs="6">
            <Card
            projectName={"project 4"}
            details={"Eat Da Burger App"}
              projectText={"Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat."}
              githubHref={"https://github.com/angelask/burger_ASK"}
              deployedHref={"https://pure-lake-17699.herokuapp.com/"}
            ></Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Card
            projectName={"project 5"}
            details={"Brainjuicing"}
              projectText={"This a a place the user can go if the need inspration, humor or revelation quotes."}
              githubHref={"https://github.com/LarraineG/Project2"}
              deployedHref={"https://brainjuicing.herokuapp.com/"}
            ></Card>
          </Col>
          <Col xs="6">
            <Card
            projectName={"project 6"}
            details={"Employee Directory"}
              projectText={"Search your staff by name using this react app."}
              githubHref={"https://github.com/angelask/react_hw19"}
              deployedHref={"https://angelask.github.io/react_hw19/"}
            ></Card>
          </Col>
        </Row>
        </Container>
        
      </section>
    )
  }
}

export default PortfolioPage;