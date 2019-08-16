import React from 'react';
import Container from '@material-ui/core/Container';

import './intro.scss';


export default function Intro() {
  return (
        <section id="intro" name="intro">
          <div className="overlay"></div>
          <div className="hero-container">
            <h2 className="hero-text">
              I want to <span className="teal">make things</span> <br /> that <span className="underline">make a difference.</span>
            </h2>
          </div>
        </section>
  );
}