import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Stats() {
  return (
    <div className="container p-1">
      <div className="row p-3">
        <div className="col-lg-6 col-sm-12 p-5">
          <h1>Trust with confidence</h1>
          <h3 className="text-muted mt-5">Customer-first always</h3>
          <p className="text-muted fs-6">
            That's why 1.5+ crore customers trust StockSphere with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="text-muted mt-4">No spam or gimmicks</h3>
          <p className="text-muted fs-6">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="text-muted mt-4">The StockSphere universe</h3>
          <p className="text-muted fs-6">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="text-muted mt-4">Do better with money</h3>
          <p className="text-muted fs-">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 p-1">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "100%" }}
            className="mt-5"
          />
          <div className="text-center mt-3">
            <a className="link-offset-2 link-underline link-underline-opacity-0 mx-4" href="">
              Explore products <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className="link-offset-2 link-underline link-underline-opacity-0 mx-1" href="">
              Try Kite Demo <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
