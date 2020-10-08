import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Contact.css';

class ContactPage extends Component {
  render() {
    return (
      <section className="contact_page">
        <h1>Contact Page</h1>
        <form className="contact-page">
        <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter a Valid Email Address" />
        </Col>
      </FormGroup>
     
      <FormGroup row>
        <Label for="exampleText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" placeholder="Message"/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>Upload File</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          
        </Col>
      </FormGroup>
      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Learn More About Us</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Check here if you would like to receive our monthly newsletter!
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Click here to be updated on our monthly specials!
            </Label>
          </FormGroup>
         
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="checkbox2" sm={2}></Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              Check me out
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup> 
        </form>
      </section>
    
    )
  }
}

export default ContactPage;