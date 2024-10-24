import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Education() {
  return (
    <div className="container p-3 mt-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-3">
          <img src="media/images/education.svg" style={{ width: "80%" }} />
        </div>
        <div className="col-lg-6 col-sm-12 p-5 mt-4 mt-4">
          <h2 className="mb-3">Free and open market education</h2>
          <p className="text-muted mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            className="link-offset-2 link-underline link-underline-opacity-0"
            href=""
          >
            Varsity <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            className="link-offset-2 link-underline link-underline-opacity-0"
            href=""
          >
            TradingQ&A <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
