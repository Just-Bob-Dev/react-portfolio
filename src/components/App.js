import React, { Component } from 'react';
import Header from './header.js';
import Navbar from './navbar.js';
import About from './about.js';
import Skills from './skills.js';
import Work from './work.js'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav-header-container">
          <Navbar />
          <Header />
        </div>
        <div className="about-resume-container">
          <About />
        </div>
        <div className="skills-container">
          <Skills />
        </div>
        <div className="work-container">
          <Work />
        </div>
      </div>
    );
  }
}

export default App;
