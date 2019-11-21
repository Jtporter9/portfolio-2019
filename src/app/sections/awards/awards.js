import React from "react";

import "./awards.scss";

export default function Awards() {
  return (
    <section id="awards" name="awards">
      <h2>AWARDS</h2>
      <div className="section-content container flow-text">
        <div className="row">
          <div className="col s12">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">
                    <a
                      href="http://startupinstitute.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="teal-text hoverline"
                    >
                      Most Improved Award 
                    </a>
                    <i class="fas fa-award teal-text" style={{'padding':'0 1rem'}}></i>
                  </span>
                </p>
                <p className="brown-text">
                  DevMountain (Provo) - Web Development Immersive | Jan 2016
                </p>
                <ul>
                  <li>
                    Awarded by instructors at the Web Development Immersive course
                    as recognition for "Most improved student in cohort"
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
