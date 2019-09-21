import React from "react";
import Container from "@material-ui/core/Container";

import "./awards.scss";

export default function Awards() {
  return (
    <section id="awards" name="awards">
      <h2>AWARDS</h2>
      <div className="section-content container flow-text">
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">
                    <a
                      href="http://startupinstitute.com"
                      target="_blank"
                      className="teal-text hoverline"
                    >
                      Student Choice Award
                    </a>
                  </span>
                </p>
                <p className="brown-text">
                  Startup Institute - Full Time Web Development | April 2017
                </p>
                <ul>
                  <li>
                    Awarded by students in the Full-Time Web Development track
                    to one instructor as recognition for "outstanding teaching,
                    listening, mentoring."
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <p>
                  <span className="card-title">
                    <a
                      href="https://wespire.com"
                      target="_blank"
                      className="teal-text hoverline"
                    >
                      Inspired By You Award
                    </a>
                  </span>
                </p>
                <p className="brown-text">WeSpire | June 2016</p>
                <ul>
                  <li>
                    Quarterly award given to a team member who exemplifies
                    WeSpire's purpose, vision, and values, goes above and beyond
                    in their role to make a particularly positive impact on the
                    company.
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
