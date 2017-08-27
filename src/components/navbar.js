import React, { Component } from 'react';
import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return(
      <div className="nav-container">
        <nav className="contact-nav">
          <ul className="contact-bar">
            <a href="https://github.com/RagyHutch" target="_blank"><li className="contact-icon"><i className="fa fa-github" aria-hidden="true"></i></li></a>
            <a href="mailto:rjhutchins22@gmail.com" target="_blank"><li className="contact-icon"><i className="fa fa-envelope" aria-hidden="true"></i></li></a>
            <a href="https://www.linkedin.com/in/robert-james-hutchins/" target="_blank"><li className="contact-icon"><i className="fa fa-linkedin-square" aria-hidden="true"></i></li></a>
          </ul>
        </nav>

        <nav className="nav-bar">
          <ul className="nav-list">
            <a href="#about" ><li className="nav-item">About</li></a>
            <a href="#skills" ><li className="nav-item">Skills</li></a>
            <a href="#work" ><li className="nav-item">Work</li></a>
            <a className="anchor-tag" href="https://trello-attachments.s3.amazonaws.com/59760c12f6ffde7c8040c6bf/59840bb32883e19185244153/9c719d76695d749896fdb2eeab41e756/robs_resume.pdf" target="_blank"><li classname="nav-item">Resume</li></a>
          </ul>
        </nav>
      </div>
    )
  }
}
