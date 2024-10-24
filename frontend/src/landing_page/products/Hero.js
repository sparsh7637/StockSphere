// Hero.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="container mt-5 text-center border-bottom">
      <h1 className="mt-5">Technology</h1>
      <h5 className="mt-4 text-muted">Sleek, modern, and intuitive trading platforms</h5>
      <p className="mt-4 mb-5 text-muted">
        Check out our{" "}
        <a
          className="link-offset-2 link-underline link-underline-opacity-0"
          href=""
        >
          investment offerings
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </p>
    </div>
  );
}

export default Hero;
