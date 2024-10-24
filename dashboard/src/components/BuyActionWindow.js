import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const backendUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post(`${backendUrl}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset className="border border-gray-300 p-2 rounded">
            <legend className="px-2 text-sm font-medium">Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              className="border border-gray-300 p-1 w-full rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </fieldset>
          <fieldset className="border border-gray-300 p-2 rounded mt-4">
            <legend className="px-2 text-sm font-medium">Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              className="border border-gray-300 p-1 w-full rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons mt-6">
        <span className="block text-gray-500 mb-2">
          Margin required ₹140.65
        </span>
        <div className="flex space-x-2">
          <Link
            className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleBuyClick}
          >
            Buy
          </Link>
          <Link
            to=""
            className="btn bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
