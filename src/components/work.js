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
            <section className="header-text nuU-text">
              <h2 className="project-title nuUh2">NuÜ</h2>
              <p className="project-text">NuÜ is a ficticous marketplace for social media enhancement services. It is built as a single page app with React for the front end and, Node as the backend. I personally handled the administration page, API, and backend build for this project. Checkout the <a href="https://github.com/RagyHutch/TIS-store" className="para-link">backend</a> code for the project.</p>
              <span className="tools-used">React, Node, Express, Mongo, HTML5, CSS3, Express, Bootstrap</span>
              <br />
              <a className="project-button live-btn" href="http://nuu.surge.sh/" target="_blank"><button className="project-button">Live Site</button></a>
              <a className="project-button github-btn" href="https://github.com/mykltronn/The-Iron-Store" target="_blank"><button className="project-button">GitHub</button></a>
            </section>
          </div>
        </div>
        <div className="notflix-container project-container">
          <div className="project-content">
            <div className="project-image notflix-box"></div>
            <section className="header-text notflix-text-content">
              <h2 className="project-title">NotFlix</h2>
              <p className="project-text">This project was given to me by a potential employer. It uses React to access an API and return information on Movies, TV shows, and Actors.</p>
              <span className="tools-used">React, HTML5, CSS, Bootstrap</span>
              <br />
              <a className="project-button live-btn" href="http://bobsnotflix.surge.sh/" target="_blank"><button className="project-button">Live Site</button></a>
              <a className="project-button github-btn" href="https://github.com/RagyHutch/relias-movie-project" target="_blank"><button className="project-button">GitHub</button></a>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

{/* <div className="soundcloud-container">
  <h2>Soundiffi</h2>
  <p>This project uses the sound cloud api to review a users request and return similar tracks. It uses HTML, CSS, and Javascript. Check out the code <a href="https://github.com/RagyHutch/soundcloud-week4">here</a>.</p>
</div> */}
