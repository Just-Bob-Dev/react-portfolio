import React, { Component } from 'react';
import '../styles/contact.css';

export default class Contact extends Component {
  render() {
    return(
      <div className="contact-icon-header-container" id="contact">
        <h1 className="contact-header" >Contact</h1>
          <div className="icon-containers">
            <div className="contact github">
              <a href="https://github.com/RagyHutch" target="_blank"><i className="fa fa-github faa" aria-hidden="true"></i>
              <p className="connect">GitHub</p>
              </a>
            </div>
            <div className="contact email">
              <a href="mailto:rjhutchins22@gmail.com" target="_blank"><i className="fa fa-envelope faa" aria-hidden="true"></i>
              <p className="connect">E-Mail</p>
              </a>
            </div>
            <div className="contact linkedin">
              <a href="https://www.linkedin.com/in/robert-james-hutchins/" target="_blank"><i className="fa fa-linkedin-square faa" aria-hidden="true"></i>
              <p className="connect">linkedin</p>
              </a>
            </div>
          </div>
      </div>
    )
  }
}
