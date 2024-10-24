import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function RightSection({ imageURL, produtName, productDescription, learnMore }) {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row mt-5">
        <div className="col-4 mt-5 pt-5">
          <h1 className="mb-4">{produtName}</h1>
          <p style={{ lineHeight: "1.8" }}>{productDescription}</p>
          <div className="mt-3">
            <a
              className="mx-5 link-offset-2 link-underline link-underline-opacity-0"
              href={learnMore}
            >
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mt-3">
          <img src={imageURL} style={{ width: "110%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
