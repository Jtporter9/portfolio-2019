import React from 'react';
import Container from '@material-ui/core/Container';

import './resume.scss';


export default function Resume() {
  return (
        <section id="resume" name="resume">
          <h2>
            RESUME
          </h2>
          <div className="section-content container flow-text">
          <blockquote>
            <h3>
              Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching.
            </h3>    
          </blockquote>

            <p>
              I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path
              has taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit,
              to dean's scholar at UPenn, to small business owner and entrepreneur — I've never stopped engaging my passion
              to help others and solve problems.
            </p>
            <p>
              As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things,
              and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact
              at a high growth company.
            </p>
            <p>
              <strong>Current Focus: </strong>
              <a href="">React</a>
              <span> // </span>
              <a href="">SASS</a>
              <span> // </span>
              <a href="">Something else..</a>
            </p>
          </div>
        </section>
  );
}