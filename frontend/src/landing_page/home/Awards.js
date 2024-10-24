import React from "react";

function Awards() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5">
          <img src="media/images/largestBroker.svg" style={{width: "90%"}} />
        </div>
        <div className="col-lg-6 col-sm-12 p-5">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p>
            2+ million StockSphere clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-4">
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and govt securities</p>
                </li>
              </ul>
            </div>
            <img src="media/images/pressLogos.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
