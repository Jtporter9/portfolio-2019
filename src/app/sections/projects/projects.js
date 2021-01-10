import React from 'react';

import './projects.scss';

//ASSETS
import rxSaverHomePage from '../../../images/rxsaver-homepage.png';
import slcClimbingHomePage from '../../../images/slc-climbing-homepage.png';


export default function Projects() {
  return (
    <section id="projects" name="projects">
      <h2>
        PROJECTS
      </h2>
      <div className="section-content container">
        {/* CARD 1 */}
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img alt="RxSaver" className="activator" src={rxSaverHomePage}></img>
            </div>
            <div className="card-content">
              <span className="card-title activator">
                <a className="primary-color" href="https://rxsaver.retailmenot.com/">Rx Saver</a>
                <i className="material-icons right primary-color">more_vert</i>
              </span>
              <p className="flow-text">
                Rx Saver by RetailMeNot is a drug price comparison tool. It allows you to find the cheapest discount card for your prescription at your nearest pharmacy.
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title">
                <a className="primary-color" href="https://rxsaver.retailmenot.com/">Rx Saver</a>
                <i className="material-icons right">close</i></span>
              <p className="flow-text">Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="col s12 m6 l4">
          <div className="card medium">
            <div className="card-image waves-effect waves-block waves-light">
              <img alt="Slc Climing" className="activator" src={slcClimbingHomePage}></img>
            </div>
            <div className="card-content">
              <span className="card-title activator">
                <a className="primary-color" href="https://www.saltlakeclimbingfestival.com">Salt Lake Climbing Festival</a>
                <i className="material-icons right primary-color">more_vert</i>
              </span>
              <p>I helped style this standalone site for a Climbing festival in Salt Lake City, UT</p>
            </div>
            <div className="card-reveal">
              <span className="card-title">
                <a className="primary-color" href="https://www.saltlakeclimbingfestival.com">Salt Lake Climbing Festival</a>
                <i className="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
        {/* CARD 3*/}

      </div>
    </section>
  );
}