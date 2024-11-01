import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const backendUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

function Navbar() {
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [userExists, setUserExists] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      console.log("verifying user");
      console.log("Cookie:", cookies.token);
      if (cookies.token) {
        console.log(cookies.token);
        try {
          const { data } = await axios.get(`${backendUrl}/verifyUser`, {
            withCredentials: true,
          });

          console.log("API response:", data);

          if (data.success) {
            console.log("User is logged in");
            setUserExists(true); 
          } else {
            console.log("User not found, clearing cookie");
            removeCookie("token");
            setUserExists(false);
          }
        } catch (error) {
          console.error("Error verifying user", error);
          removeCookie("token");
          setUserExists(false);
        }
      } else {
        console.log("No token found, user is not logged in");
        setUserExists(false); 
      }
    };

    verifyUser();
  }, [cookies.token, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    setUserExists(false);
    navigate("/signup");
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/stock.png"
            style={{ width: "80%", marginRight:"30px"}}
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
          <ul style={{marginLeft:"250px"}} className="navbar-nav me-auto mb-2 p-2 mb-lg-0">
            {userExists ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="https://zerodha-dashboard-nu.vercel.app"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link active">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link active" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="support">
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
