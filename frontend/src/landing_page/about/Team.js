import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Team() {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <h1 className="fs-1 text-center">People</h1>
        </div>
        <div
          className="row p-5 mb-5"
          style={{ fontSize: "110%", lineHeight: "1.75" }}
        >
          <div className="col-6 text-center mt-5">
            <img
              src="media/images/cul2.png"
              style={{ borderRadius: "100%", width: "60%" }}
            />
            <h3 className="mt-4 mb-4 text-muted">Sparsh Gulati</h3>
          </div>
          <div className="col-6 p-5 fs-6 text-muted">
            <p className="t">
              I’m Sparsh Gulati, a tech enthusiast and web developer, currently
              in my 2nd year of B.Tech in Computer Science. I love coding,
              constantly learning new things, and connecting with new people who
              share the same passion for technology.
              <br />
              <br />
              When I'm not coding, you can usually find me playing football or
              exploring new interests.
              <br />
              <br />
              Connect on
              <a
                className="mx-0 p-3 link-offset-2 link-underline link-underline-opacity-0"
                href="https://www.linkedin.com/in/sparsh-gulati-665032287/"
              >
                LinkedIn <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                className="mx-0 p-1 link-offset-2 link-underline link-underline-opacity-0"
                href="https://www.instagram.com/sparsh_7637/"
              >
                Instagram <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
