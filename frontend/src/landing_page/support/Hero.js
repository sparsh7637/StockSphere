// Hero.js
import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h3 className="">Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            style={{
              width: "100%",
              height: "25%",
              border: "none",
              borderRadius: "5px",
            }}
            className="p-4 mt-4 mb-4"
          />
          <a className="mx-3 fs-5 " href="">
            Track account opening
          </a>
          <a className="mx-3 fs-5 " href="">
            Track segment activation{" "}
          </a>
          <a className="mx-3 fs-5 " href="">
            Intraday margins{" "}
          </a>
          <a className="mx-3 fs-5 " href="">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <a className="mx-3 fs-5 " href="">
            1. Surveillance measure on scrips - September 2024l
          </a>
          <br />
          <a className="mx-3 fs-5 " href="">
            2. Rights Entitlements listing in September 2024
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
