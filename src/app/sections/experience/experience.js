import React from 'react';
import RxSaverLogo from '../../../images/rxsaver.png';
import LowestMedLogo from '../../../images/LM.png';
import DevMountainLogo from '../../../images/DM_logo.png';

import './experience.scss';


export default function Experience() {
  return (
    <section id="experience" name="experience">
      <h2>
        EXPERIENCE
    </h2>
      <div className="section-content container">
        <div className="row">
          <div className="col 12">
            {/* CARD 1 */}
            <div className="card" style={{ marginBottom: "3rem" }}>
              <div className="card-content">
                <div className="row">
                  <div className="col">
                    <a href="https://rxsaver.retailmenot.com" target="_blank" rel="noopener noreferrer">
                      <img alt="Rx Saver logo" src={RxSaverLogo} className="responsive-img center-block company-logo"></img>
                    </a>
                  </div>
                  <div className="col">
                    <p>
                      <span className="card-title"><a href="https://rxsaver.retailmenot.com" target="_blank" rel="noopener noreferrer" className="teal-text hoverline">Rx Saver RetailMeNot</a></span>
                      <span className="role brown-text">Full-Stack Software Developer</span>
                    </p>
                  </div>
                </div>
                <p><em className="grey-text">React/Redux platform to help consumers save money on pharmaceutical prescriptions through discount cards</em></p>
                <h6>Develop Product</h6>
                <ul>
                  <li>Evaluated peer code to ensure function, design, and standardization.</li>
                  <li>Maintained understanding of current web technologies or programming practices through continuing education.</li>
                  <li>Wrote supporting code for web applications, including frontend and backend technologies. </li>
                  <li>Assisted in managing data in database, performing queries to update, and regulate database.</li>
                  <li>Recommended and implemented performance improvements (speed improvements) through caching, code improvements and image optimizations.</li>
                  <li>Performed or directed website updates.</li>
                  <li>Created new pages as directed per product & design.</li>
                  <li>Tools: React/Redux, Jest, Enzyme // Angular, .NET, JS // Sass // JSX, SQL // Wordpress, PHP</li>

                </ul>
                <h6>Accomplishments</h6>
                <ul>
                  <li>Assisted in migration, and redesign of entire frontend code base from Angular to React JS/Redux</li>
                  <li>Improved Unit testing coverage percentage of frontend from by %40</li>
                  <li>Lead team in designing and refactoring Wordpress theme, and project</li>
                </ul>
              </div>
              <div className="card-action"><span>Mar 2018 - June 2019  |  Austin, TX</span></div>
            </div>
            {/* CARD 2 */}
            <div className="card" style={{ marginBottom: "3rem" }}>
              <div className="card-content">
                <div className="row">
                  <div className="col">
                    <a href="https://lowestmed.com" target="_blank" rel="noopener noreferrer">
                      <img alt="Rx Saver logo" src={LowestMedLogo} className="responsive-img center-block company-logo"></img>
                    </a>
                  </div>
                  <div className="col">
                    <p>
                      <span className="card-title"><a href="https://lowestmed.com" target="_blank"  rel="noopener noreferrer" className="teal-text hoverline">LowestMed</a></span>
                      <span className="role brown-text">Full-Stack Software Developer</span>
                    </p>
                  </div>
                </div>
                <p><em className="grey-text">Angular/.NET platform to help consumers save money on pharmaceutical prescriptions through discount cards</em></p>
                <h6>Develop Product</h6>
                <ul>
                  <li>As one of two developers, I created content, and functionality as directed from product, reviewed, tested, and managed releases.</li>
                  <li>Perform work, and improvements on both frontend, and backend technologies, working with multiple affiliated and their API's</li>
                  <li>Assisted in managing and updating database. </li>
                  <li>Built autocorrecting search results for users to improve search dramatically</li>
                  <li>Helped as one of five initial employees grow transactions in company from 7,000 transactions monthly to over 50,000, and helped company arrive to be sold in March of 2018 to RetailMeNot</li>
                  <li>Tools: Angular, .NET, JS, C# // Sass // SQL // Wordpress, PHP</li>

                </ul>
                <h6>Accomplishments</h6>
                <ul>
                  <li>Assisted in migration, and redesign of entire frontend code base from Angular to React JS/Redux</li>
                  <li>Improved Unit testing coverage percentage of frontend from by %40</li>
                  <li>Lead team in designing and refactoring Wordpress theme, and project</li>
                </ul>
              </div>
              <div className="card-action"><span>Jul 2016 - Mar 2018  |  Draper, UT</span></div>
            </div>
            {/* CARD 3 */}
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col">
                    <a href="https://devmountain.com" target="_blank" rel="noopener noreferrer">
                      <img alt="Rx Saver logo" src={DevMountainLogo} className="responsive-img center-block company-logo"></img>
                    </a>
                  </div>
                  <div className="col">
                    <p>
                      <span className="card-title"><a href="https://devmountain.com" target="_blank" rel="noopener noreferrer" className="teal-text hoverline">DevMountain</a></span>
                      <span className="role brown-text">Web Dev Student</span>
                    </p>
                  </div>
                </div>
                <p><em className="grey-text">Web Dev Immersive course focused on MEAN stack, <a href="https://devmountain.com/web-bootcamp-immersive">Course Curriculum</a></em></p>
                <h6>Develop Product</h6>
                <ul>
                  <li>Focused on learn the fundamentals of being a web developer</li>
                  <li>Worked on Daily projects to boost skill, and learning (some found on my <a href="https://github.com/Jtporter9?tab=repositories">github)</a></li>
                  <li>Built an individual full stack <a href="https://github.com/Jtporter9/Personal-Project-MessangerApp">project</a></li>
                  <li>Built a team full stack  <a href="https://github.com/pharaoh-js/Pharaoh">project</a></li>
                  <li>Tools: HTML, CSS, JS, LESS, GIT, BASH // Mongo, Express, Angular, Node (MEAN) // React, Firebase</li>

                </ul>
                <h6>Accomplishments</h6>
                <ul>
                  <li>Received certification of completion.</li>
                  <li>Received award for most improved student in cohort.</li>
                  <li>Received award from most technical group project in cohort.</li>
                </ul>
              </div>
              <div className="card-action"><span>Oct 2015 - Feb 2016  |  Provo, UT</span></div>
            </div>
            {/* END OF CARDS */}
          </div>
        </div>
      </div>
    </section>
  );
}