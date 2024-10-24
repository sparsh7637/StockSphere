import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container flex flex-col md:flex-row h-screen">
      <GeneralContextProvider>
        {/* WatchList section */}
        <div className="watchlist-container w-full md:w-1/4 p-4 bg-gray-100 border-r">
          <WatchList />
        </div>
      </GeneralContextProvider>

      {/* Main content area */}
      <div className="content w-full md:w-3/4 p-6 bg-white overflow-y-auto">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
