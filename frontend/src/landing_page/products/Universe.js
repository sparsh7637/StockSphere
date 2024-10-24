import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 mb-5 p-5 text-center">
      <div className="row">
        <h1 className="">The StockSphere Universe</h1>
        <p className="mt-4 mb-5 fs-5 text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted mt-3">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img src="media/images/streakLogo.png" style={{ width: "50%" }} />
          <p className="mt-3 text-small text-muted">
            {" "}
            Algo % strategy platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "50%" }} />
          <p className="mt-4 text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/StockSphereFundHouse.png"
            style={{ width: "60%" }}
          />
          <p className="mt-3 text-small text-muted mt-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "60%" }} />
          <p className="mt-3 text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "40%" }} />
          <p className="mt-3 text-small text-muted">Insurance</p>
        </div>
      </div>
      <Link
          style={{ width: "15%", margin: "0 auto" }}
          type="button"
          className="btn btn-primary p-2 fs-5 mt-4"
          to="../signup"
        >
          Sign Up
        </Link>
    </div>
  );
}

export default Universe;
