import React from "react";

//ASSETS
import htmlImg from "../../images/html5.png";
import reactImg from "../../images/react.png";
import cssImg from "../../images/css3.png";
import sassImg from "../../images/sass.png";
import bootstrapImg from "../../images/bootstrap.png";
import materialImg from "../../images/materialize.png";
import nodeImg from "../../images/nodejs.png";
import javascriptImg from "../../images/javascript.png";
import es6Img from "../../images/es6.png";
import reduxImg from "../../images/redux.png";
import angularImg from "../../images/angular.png";
import vuejsImg from "../../images/vuejs.png";

import "./skills.scss";

export default function Skills() {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="container section-content">
        {/* HTML CSS CARD */}
        <div className="card flow-text col s12 p5">
          <div class="card-content">
            <h4 className="brown-text light">HTML/CSS</h4>
            <div className="row text-center">
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={htmlImg} className="img-icon"></img>
                <p>HTML5</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={reactImg} className="img-icon"></img>
                <p>JSX</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={cssImg} className="img-icon"></img>
                <p>CSS3</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={sassImg} className="img-icon"></img>
                <p>SASS</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={bootstrapImg} className="img-icon"></img>
                <p>Bootstrap</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={materialImg} className="img-icon"></img>
                <p>Materialize</p>
              </div>
            </div>
          </div>
        </div>
        {/* FRONTEND CARD */}
        <div className="card flow-text col s12 p5">
          <div class="card-content">
            <h4 className="brown-text light">FRONTEND</h4>
            <div className="row text-center">
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={javascriptImg} className="img-icon"></img>
                <p>Javascript</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={es6Img} className="img-icon"></img>
                <p>ES6</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={reactImg} className="img-icon"></img>
                <p>ReactJS</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={reduxImg} className="img-icon"></img>
                <p>Redux</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={angularImg} className="img-icon"></img>
                <p>Angular</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={vuejsImg} className="img-icon"></img>
                <p>VUEjs</p>
              </div>
            </div>
          </div>
        </div>
        {/* BACKEND CARD */}
        <div className="card flow-text col s12 p5">
          <div class="card-content">
            <h4 className="brown-text light">BACKEND</h4>
            <div className="row text-center">
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={javascriptImg} className="img-icon"></img>
                <p>Javascript</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={es6Img} className="img-icon"></img>
                <p>ES6</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={reactImg} className="img-icon"></img>
                <p>ReactJS</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={reduxImg} className="img-icon"></img>
                <p>Redux</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={angularImg} className="img-icon"></img>
                <p>Angular</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={vuejsImg} className="img-icon"></img>
                <p>VUEjs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
