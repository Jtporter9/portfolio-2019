import React from 'react';
import Container from '@material-ui/core/Container';

import './resume.scss';


export default function Resume() {
  return (
        <section id="resume" name="resume">
          <Container className="hero-container">
            <h2 className="hero-text">
              My Resume
            </h2>
          </Container>
        </section>
  );
}