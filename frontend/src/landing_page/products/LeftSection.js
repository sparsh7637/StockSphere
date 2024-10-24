// LeftSection.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LeftSection({
  imageURL,
  produtName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5 p-4">
      <div className="row mt-5">
        <div className="col-6 p-1">
          <img src={imageURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5 p-3">
          <h1 className="mb-4">{produtName}</h1>
          <p style={{lineHeight:"1.8"}}>{productDescription}</p>
          <div className="mt-3">
            <a
              className="mx-0 link-offset-2 link-underline link-underline-opacity-0"
              href={tryDemo}
            >
              Try Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a
              className="mx-5 link-offset-2 link-underline link-underline-opacity-0"
              href={learnMore}
            >
              Learn More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="mt-4">
            <a className="mx-0 " href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a className="mx-4" href={appStore}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
