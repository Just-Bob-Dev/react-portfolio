import React, { Component } from 'react';
import '../styles/Icon.css';

export default class Skills extends Component {
  render() {
    return(
      <div className="skills" id="skills">
        <h1 className="skills-h1">Skills</h1>
        <ul className="icon-container">
          <li className="icon-item css-holder"><span className="description">CSS 3</span></li>
          <li className="icon-item html5-holder"><span className="description">HTML 5</span></li>
          <li className="icon-item js-holder"><span className="description">ECMA Script 6</span></li>
          <li className="icon-item react-holder"><span className="description">React</span></li>
          <li className="icon-item node-holder"><span className="description">Node</span></li>
          <li className="icon-item git-holder"><span className="description">Git</span></li>
          <li className="icon-item postgress-holder"><span className="description">PostgresSQL</span></li>
          <li className="icon-item mongo-holder"><span className="description">MongoDB</span></li>
          <li className="icon-item sql-holder"><span className="description">SQL</span></li>
        </ul>
      </div>
    )
  }
}
