import React from "react";

function Footer() {
  return (
    <footer className="bg-light border-top">
      <div className="container">
        <div className="row mt-5">
          <div className="col mx-5 p-2">
            <img src="media/images/stock.png" style={{ width: "55%" }} />
            <p className="text-muted mt-3" style={{ fontSize: "90%" }}>
              &copy; 2010 - 2024, StockSphere Broking Ltd.
              <br /> All rights reserved.
            </p>
          </div>
          <div className="col">
            <p className="fs-5 mb-3 fw-medium text-muted">Company</p>
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">About</a>
            <br />
            <a className="link-dark link-offset-2 link-underline-opacity-0" href="#">Products</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Pricing</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Referral programme</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Careers</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">StockSphere.tech</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Press & media</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">StockSphere Cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p className="fs-5 mb-3 fw-medium text-muted">Support</p>
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Contact us</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Support portal</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Z-Connect blog</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">List of charges</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Downloads & resources</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Videos</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Market overview</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">How to file a complaint?</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Status of your complaints</a>
            <br />
          </div>
          <div className="col">
            <p className="fs-5 mb-3 fw-medium text-muted">Account</p>
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Open an account</a>
            <br />
            <a class="link-dark link-offset-2 link-underline-opacity-0" href="#">Fund Transfer</a>
            <br />
          </div>
        </div>
        <div className="mt-5 p-3 text-muted" style={{ fontSize: "75%" }}>
          <p className="text-muted">
            StockSphere Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through StockSphere
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through StockSphere Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: StockSphere
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@StockSphere.com, for DP related to dp@StockSphere.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p className="text-muted">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="text-muted">
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p className="text-muted">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.{" "}
          </p>

          <p className="text-muted">
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p className="text-muted">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of StockSphere and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
