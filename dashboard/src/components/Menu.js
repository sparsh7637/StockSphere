import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      {/* Logo */}
      <div className="p-1">
        <img
          src="slogo3.png"
          style={{ width: "50%" }}
          alt="Logo"
          className="w-4 h-auto"
        />
      </div>

      {/* Menu List */}
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              className="no-underline"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={`${
                  selectedMenu === 0 ? `${activeMenuClass}` : `${menuClass}`
                }`}
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="no-underline"
              onClick={() => handleMenuClick(1)}
            >
              <p
                className={`${
                  selectedMenu === 1 ? `${activeMenuClass}` : `${menuClass}`
                }`}
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              className="no-underline"
              onClick={() => handleMenuClick(2)}
            >
              <p
                className={`${
                  selectedMenu === 2 ? `${activeMenuClass}` : `${menuClass}`
                }`}
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              className="no-underline"
              onClick={() => handleMenuClick(3)}
            >
              <p
                className={`${
                  selectedMenu === 3 ? `${activeMenuClass}` : `${menuClass}`
                }`}
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              className="no-underline"
              onClick={() => handleMenuClick(4)}
            >
              <p
                className={`${
                  selectedMenu === 4 ? `${activeMenuClass}` : `${menuClass}`
                }`}
              >
                Funds
              </p>
            </Link>
          </li>
        </ul>
        <hr className="my-4 border-gray-300" />
      </div>

      {/* Profile Section */}
      <div
        className="profile"
        onClick={handleProfileClick}
      >
        <div className="avatar">SU</div>
        <p className="username">USERID</p>
      </div>
    </div>
  );
};

export default Menu;
