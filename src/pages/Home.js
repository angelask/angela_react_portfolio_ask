import React, { Component } from 'react';
import './Home.css';
import angela from './angela.jpg';

class HomePage extends Component {
  render() {
    let content = (
      <section className="home_page">
   
     
        <h1>About Me</h1>
        <img src={angela} width="200" alt="angela"/>

        <p>CHEMICAL ENGINEERING EXECUTIVE PROFILE establishing and Implementing Quality Management Systems in compliance with ISO 9001 Quality Management Requirements as an Automation and Control Systems Engineering Professional. Specialist in project management support and technological expertise for Process and Drilling Control Systems. </p> 
     <p>A highly motivated customer-focused technical and business professional with over 15 years’ experience in the Oil and Gas industry for offshore/onshore with focus in Engineering and Management.  Proficiency in training, coaching, leadership development and innovative problem-solving skills.  Recognized for utilizing stellar interpersonal strategic thinking and project management skills to develop curriculum to satisfy customer needs effectively across multiple spectrums.  Team player with colleagues and customers, demonstrated ability to communicate proactively with employees and all levels within the organization.  Creative project lead, with the capacity to effectively interact with people, enabled hand over of deliverables on schedule. </p>
     <a className="nav-link" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">Linkedin Account</a>
    <a className="nav-link" href="https://drive.google.com/file/d/14weceL6idq7l1wBcq26FPsZkwc359bKN/view?usp=sharing">Engineering Resume</a>
    <a className="nav-link" href=" https://github.com/settings/profile">Git Hub Profile</a>
      </section>
    )

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}

export default HomePage;