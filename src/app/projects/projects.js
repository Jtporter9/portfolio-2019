import React from 'react';
import Container from '@material-ui/core/Container';

import './projects.scss';


export default function Projects() {
  return (
        <section id="projects" name="projects">
          <Container className="hero-container">
            <h2 className="hero-text">
              My Projects
            </h2>
          </Container>
        </section>
  );
}