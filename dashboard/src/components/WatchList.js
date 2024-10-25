import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ChartBarIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { watchlist } from "../data/data";

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const data = {
    labels: filteredWatchlist.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container mb-4">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search border text-black font-bold rounded px-3 py-2"
          style={{ color: "black" }}
        />
        <span className="counts text-gray-500">
          {filteredWatchlist.length} / 50
        </span>
      </div>

      <ul className="list">
        {filteredWatchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => setShowWatchlistActions(true);
  const handleMouseLeave = () => setShowWatchlistActions(false);

  return (
    <li
      className="flex justify-between items-center py-2 border-b"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item flex items-center">
        <p className={`font-semibold ${stock.isDown ? "loss" : "profit"}`}>
          {stock.name}
        </p>
        <div className="itemInfo flex items-center ml-4">
          <span className={`percent ${stock.isDown ? "loss" : "profit"}`}>
            {stock.percent}
          </span>
          {stock.isDown ? (
            <ArrowDownIcon className="w-4 h-4 loss ml-1" />
          ) : (
            <ArrowUpIcon className="w-4 h-4 profit ml-1" />
          )}
          <span className="price ml-2">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid); // Function to open SellActionWindow
  };

  return (
    <div
      className="actions flex space-x-2 ml-2"
      style={{ marginRight: "300vh" }}
    >
      <button className="btn-blue" onClick={handleBuyClick}>
        Buy
      </button>
      <button
        style={{ marginLeft: "8px", marginRight: "120px", color: "white" }}
        className="btn-red"
        onClick={handleSellClick}
      >
        Sell
      </button>
    </div>
  );
};

export default WatchList;
