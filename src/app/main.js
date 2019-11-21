import React from 'react';

//COMPONENTS
import Drawer from './drawer/drawer';
// import MobileNav from './mobileNav/mobileNav';
import Intro from './sections/intro/intro';
import About from './sections/about/about';
import Experience from './sections/experience/experience';
import Projects from './sections/projects/projects';
import Skills from './sections/skills/skills';
import Awards from './sections/awards/awards';
import Education from './sections/education/education';
import Contact from './sections/contact/contact';

//SCSS
import './main.scss';

export default function PermanentDrawerLeft() {
  return (
    <div className='flex'>
      <Drawer />
      <main>
        {/* <MobileNav /> */}
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Education />
        <Contact />
      </main>
    </div>
  );
}