import React, { Component } from 'react';
import '../styles/Icon.css';

export default class Skills extends Component {
  render() {
    return(
      <div className="skills" id="skills">
        <h1 className="skills-h1">Skills</h1>
        <ul className="icon-container">
          <li className="icon-item css-holder"></li>
          <li className="icon-item html5-holder"></li>
          <li className="icon-item js-holder"></li>
          <li className="icon-item react-holder"></li>
          <li className="icon-item node-holder"></li>
          <li className="icon-item git-holder"></li>
          <li className="icon-item postgress-holder"></li>
          <li className="icon-item mongo-holder"></li>
          <li className="icon-item sql-holder"></li>
        </ul>
      </div>
    )
  }
}
