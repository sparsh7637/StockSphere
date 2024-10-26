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
    <div className="menu-container flex flex-col h-full bg-gray-100 shadow-lg">
      {/* Logo */}
      <div className="p-1">
        <img src="slogo3.png" style={{width:"50%"}} alt="Logo" className="w-4 h-auto" />
      </div>

      {/* Menu List */}
      <div className="menus flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="no-underline"
              onClick={() => handleMenuClick(0)}
            >
              <p
                className={`${
                  selectedMenu === 0
                    ? `${activeMenuClass} bg-blue-500 text-white`
                    : `${menuClass} text-gray-700`
                } py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-150`}
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
                  selectedMenu === 1
                    ? `${activeMenuClass} bg-blue-500 text-white`
                    : `${menuClass} text-gray-700`
                } py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-150`}
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
                  selectedMenu === 2
                    ? `${activeMenuClass} bg-blue-500 text-white`
                    : `${menuClass} text-gray-700`
                } py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-150`}
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
                  selectedMenu === 3
                    ? `${activeMenuClass} bg-blue-500 text-white`
                    : `${menuClass} text-gray-700`
                } py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-150`}
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
                  selectedMenu === 4
                    ? `${activeMenuClass} bg-blue-500 text-white`
                    : `${menuClass} text-gray-700`
                } py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-150`}
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
        className="profile flex items-center justify-between p-4 cursor-pointer hover:bg-gray-200"
        onClick={handleProfileClick}
      >
        <div className="avatar">
          SU
        </div>
        <p className="username text-gray-700 ml-3">USERID</p>
      </div>
    </div>
  );
};

export default Menu;
