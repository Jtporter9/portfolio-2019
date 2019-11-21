/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import './about.scss';


export default function About() {
  return (
    <section id="about" name="about">
      <h2>
        ABOUT
      </h2>
      <div className="section-content container flow-text">
      <blockquote>
        <h3>
          Mission-driven full stack engineer with a passion for UI design, problem solving, and collaboration.
        </h3>    
      </blockquote>

        <p>
          I’ve always sought out opportunities and challenges that are meaningful to me. I have a passion to help other, and to work in teams.
          From a two year service mission in Mexico, to college athletics, I seek to bring that same passion everywhere I go — I've never stop engaging in my passion
          to help others and solve problems.
        </p>
        <p>
          As a software engineer, I enjoy using my obsessive attention to detail, my unequivocal love for making things,
          and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact
          at a high growth company.
        </p>
        <p>
          <strong>Current Focus: </strong>
          <a href="https://reactjs.org/">React</a>
          <span> // </span>
          <a href="https://sass-lang.com/">SASS</a>
          <span> // </span>
          <a href="https://getbootstrap.com/docs/4.0/layout/grid/">Bootstrap grid</a>
        </p>
      </div>
    </section>
  );
}