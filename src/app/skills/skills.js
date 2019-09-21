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
import laravelImg from "../../images/laravel.png";
import reduxImg from "../../images/redux.png";
import angularImg from "../../images/angular.png";
import vuejsImg from "../../images/vuejs.png";
import cSharpImg from "../../images/csharp_logo.png";
import mongoDbImg from "../../images/mongodb.png";
import sqlImg from "../../images/sql.png";
import phpImg from "../../images/php.png";

import "./skills.scss";

export default function Skills() {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="container section-content">
        {/* HTML CSS CARD */}
        <div className="card col s12 p5">
          <div class="card-content">
            <h4 className="brown-text light flow-text">HTML/CSS</h4>
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
        <div className="card col s12 p5">
          <div class="card-content">
            <h4 className="brown-text light flow-text">FRONTEND</h4>
            <div className="row text-center">
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={javascriptImg} className="img-icon"></img>
                <p>JS/ES6</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={cSharpImg} className="img-icon"></img>
                <p>.NET</p>
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
        <div className="card col s12 p5">
          <div class="card-content">
            <h4 className="brown-text light flow-text">BACKEND</h4>
            <div className="row text-center">
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={sqlImg} className="img-icon"></img>
                <p>SQL</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={nodeImg} className="img-icon"></img>
                <p>Nodejs</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={mongoDbImg } className="img-icon"></img>
                <p>MongoDB</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={cSharpImg} className="img-icon"></img>
                <p>.NET</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={laravelImg} className="img-icon"></img>
                <p>Laravel</p>
              </div>
              <div className="col s4 l4 xl2 center-align">
                <img alt="" src={phpImg} className="img-icon"></img>
                <p>PHP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
