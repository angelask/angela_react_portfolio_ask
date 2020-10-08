import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render(){
    return (
      <React.Fragment>
        
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
          <Navbar.Brand
           
          >
           <Link to="/angela_react_portfolio_ask" >Angela Keys Engineering Home Page </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link
                
              ><Link to="/angela_react_portfolio_ask/portfolio" >
                Portfolio</Link>
              </Nav.Link>
              <Nav.Link
               
              ><Link to="/angela_react_portfolio_ask/contact" >
                Contact Us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default NavBar;