import React from "react";
import Container from "@material-ui/core/Container";

import "./education.scss";

export default function Education() {
  return (
    <section id="education" name="education">
      <h2>EDUCATION</h2>
      <div className="section-content container flow-text">
        <div class="row">
          <div class="col s12 m6">
            <div class="card">
              <div class="card-content">
                <p>
                  <span class="card-title">
                    <a href="http://upenn.edu" class="teal-text hoverline">
                      University of Pennsylvania
                    </a>
                  </span>
                </p>
                <p class="brown-text">Philadelphia, PA</p>
                <ul>
                  <li>B.A. in Psychology</li>
                  <li>Summa Cum Laude</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card">
              <div class="card-content">
                <p>
                  <span class="card-title">
                    <a href="http://www.gwu.edu" class="teal-text hoverline">
                      George Washington University
                    </a>
                  </span>
                </p>
                <p class="brown-text">Washington, D.C.</p>
                <ul>
                  <li>B.A. candidate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
