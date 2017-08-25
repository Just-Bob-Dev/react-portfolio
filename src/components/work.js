import React, { Component } from 'react';
import '../styles/Work.css';

export default class Work extends Component {
  render(){
    return(
      <div className="work-container" id="work">
        <h1 className="work-h1">Work</h1>
        <div className="nu-u-container project-container">
          <div className="project-content">
            <div className="project-image NuU-box">
            </div>
            <section className="header-text">
              <h2 className="project-title nuUh2">NuÜ</h2>
              <p className="project-text">NuÜ is a ficticous marketplace for social media enhancement services. It is built as a single page app with React for the front end and, Node as the backend. I personally handled the administration page, API, and backend build for this project.<span>Check it out on github. Front end code for <a href="https://github.com/mykltronn/The-Iron-Store">The Iron Store</a> and here is the <a href="https://github.com/RagyHutch/TIS-store">backend code</a> for the project.</span></p>
            </section>
          </div>
        </div>
        <div className="notflix-container project-container">
          <div className="project-content">
            <div className="project-image notflix-box"></div>
            <section className="header-text">
              <h2 className="project-title">NotFlix</h2>
              <p className="project-text">This is a twitter clone using Node, Express, Mustache, PostgresSQL, and a SQL database to hold and maintain the content. Check out the code <a href="https://github.com/RagyHutch/gabble-week6-project">here</a>.</p>
            </section>
          </div>
        </div>
        <div className="soundcloud-container">
          <h2>Soundiffi</h2>
          <p>This project uses the sound cloud api to review a users request and return similar tracks. It uses HTML, CSS, and Javascript. Check out the code <a href="https://github.com/RagyHutch/soundcloud-week4">here</a>.</p>
        </div>
      </div>
    )
  }
}
