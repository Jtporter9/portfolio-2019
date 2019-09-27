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
                      DevMountain Bootcamp
                    </a>
                  </span>
                </p>
                <p class="brown-text">Provo, UT</p>
                <ul>
                  <li>Web Dev Immersive course certificate of completion</li>
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
                      Utah Valley University
                    </a>
                  </span>
                </p>
                <p class="brown-text">Orem, Utah</p>
                <ul>
                  <li>Bacholers Degree in Web & App Development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
