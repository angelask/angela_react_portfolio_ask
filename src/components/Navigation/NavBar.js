import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends Component {
  render(){
    return (
      <React.Fragment>
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        /> */}
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
          <Navbar.Brand
            href="/"
          >
            Angela Keys Engineering Home Page
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                href="/portfolio"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="/contact"
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default NavBar;