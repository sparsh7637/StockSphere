import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5 mt-2">
      <div className="row text-center border-bottom">
        <h1 className="mt-1">Charges</h1>
        <p className="fs-4 mb-5 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row">
        <div className="col-4 p-3 text-center">
          <img className="p-5" src="media/images/pricingEquity.svg" />
          <h2 className="fs-3 mb-4">Free equity delivery</h2>
          <p className="text-center text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img className="p-5" src="media/images/intradayTrades.svg" />
          <h2 className="fs-3 mb-4">Intraday and F&O trades</h2>
          <p className="text-center text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img className="p-5" src="media/images/pricingEquity.svg" />
          <h2 className="fs-3 mb-4">Free direct MF</h2>
          <p className="text-center text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
