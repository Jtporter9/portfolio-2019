import React from 'react';

import './intro.scss';


export default function Intro() {
  return (
        <section id="intro" name="intro">
          <div className="overlay"></div>
          <div className="hero-container">
            <h1 className="hero-text mobile">JT Porter</h1>
            <div><span className="hero-text mobile" style={{fontSize: "24px"}}>Full Stack Developer</span></div>
            <h2 className="hero-text">
              I want to <span className="teal">make things</span> <br /> that <span className="underline">make a difference.</span>
            </h2>
          </div>
        </section>
  );
}