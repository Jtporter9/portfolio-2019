import React from 'react';
import Container from '@material-ui/core/Container';

import './about.scss';


export default function About() {
  return (
        <section id="about" name="about">
          <Container className="hero-container">
            <h2 className="hero-text">
              About me
            </h2>
          </Container>
        </section>
  );
}