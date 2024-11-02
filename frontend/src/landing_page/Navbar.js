import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const activeLinkStyles = {
    color: "#007bff",
  };

  const handleLinkStyles = (path) => {
    return location.pathname === path ? activeLinkStyles : {};
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/stock.png"
            style={{ width: "80%", marginRight: "30px" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            style={{ marginLeft: "250px" }}
            className="navbar-nav me-auto mb-2 p-2 mb-lg-0"
          >
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signup"
                style={handleLinkStyles("/signup")}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                style={handleLinkStyles("/login")}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={handleLinkStyles("/about")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
                style={handleLinkStyles("/products")}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/pricing"
                style={handleLinkStyles("/pricing")}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/support"
                style={handleLinkStyles("/support")}
              >
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
