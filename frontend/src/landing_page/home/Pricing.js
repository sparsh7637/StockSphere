import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
  return (
    <div className="container mt-5 p-3">
      <div className="row p-4">
        <div className="col-4">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            className="link-offset-2 link-underline link-underline-opacity-0"
            href=""
          >
            See Pricing <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col border p-4 text-center">
              <h1 className="mb-3">₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-4 text-center">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
