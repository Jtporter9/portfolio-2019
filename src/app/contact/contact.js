import React from "react";
import Container from "@material-ui/core/Container";

import "./contact.scss";

export default function Contact() {
  return (
    <section id="contact" name="contact">
      <h2>CONTACT</h2>
      <div className="section-content container flow-text">
        <p>
          <a
            aria-label="Email Tanner"
            href="mailto:jtporter9@gmail.com"
            data-position="top"
            data-tooltip="Email Tanner"
            class="btn-floating btn-large waves-effect waves-light orange tooltipped"
          >
            <i class="fa fa-envelope"></i>
          </a>
          <a aria-label="Email Tanner" href="mailto:jtporter9@gmail.com">
            jtporter9@gmail.com
          </a>
        </p>
        <p>
          <a
            aria-label="View Tanner on GitHub"
            href="http://github.com/jtporter9"
            target="_blank"
            data-position="top"
            data-tooltip="View Tanner on GitHub"
            class="btn-floating btn-large waves-effect waves-light orange tooltipped"
          >
            <i class="fab fa-github"></i>
          </a>
          <a aria-label="Tanner on Github" href="http://github.com/jtporter9">
            github.com/jtporter9
          </a>
        </p>
        <p>
          <a
            aria-label="View Tanner on LinkedIn"
            href="http://linkedin.com/in/jtporter9"
            target="_blank"
            data-position="top"
            data-tooltip="View Andrew on LinkedIn"
            class="btn-floating btn-large waves-effect waves-light orange tooltipped"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            aria-label="Andrew on LinkedIn"
            href="http://linkedin.com/in/jtporter9"
          >
            linkedin.com/in/jtporter9
          </a>
        </p>
      </div>
    </section>
  );
}
