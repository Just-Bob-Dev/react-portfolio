import React, { Component } from 'react';
import '../styles/Work.css';

export default class Work extends Component {
  render(){
    return(
      <div className="work-container">
        <h1 className="work-h1">Work</h1>
        <div className="nu-u-container project-container">
          <h2>NuÜ</h2>
          <p>NuÜ is a ficticous marketplace for social media enhancement services. It is built as a single page app with React for the front end and, Node as the backend. I personally handled the administration page, API, and backend build for this project.</p><span>Check it out on github. Front end code for <a href="https://github.com/mykltronn/The-Iron-Store">The Iron Store</a> and here is the <a href="https://github.com/RagyHutch/TIS-store">backend code</a> for the project.</span>
        </div>
        <div className="barkler-container project-container">
          <h2 className="project-title">Barkler</h2>
          <p>This is a twitter clone using Node, Express, Mustache, PostgresSQL, and a SQL database to hold and maintain the content. Check out the code <a href="https://github.com/RagyHutch/gabble-week6-project">here</a>.</p>
        </div>
        <div className="soundcloud-container">
          <h2>Soundiffi</h2>
          <p>This project uses the sound cloud api to review a users request and return similar tracks. It uses HTML, CSS, and Javascript. Check out the code <a href="https://github.com/RagyHutch/soundcloud-week4">here</a>.</p>
        </div>
      </div>
    )
  }
}
