import React, { useState, useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client"; // Import socket.io-client
import { VerticalGraph } from "./VerticalGraph";

// Get backend URL based on environment variables
const backendUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // Establish socket connection
  useEffect(() => {
    // Fetch initial data via HTTP request
    axios.get(`${backendUrl}/allHoldings`).then((res) => {
      setAllHoldings(res.data);
    });

    // Initialize Socket.IO connection
    const socket = io(backendUrl, {
      transports: ["websocket"],
      withCredentials: true,
    });

    // Listen for 'holdingsUpdate' events from the server
    socket.on("holdingsUpdate", (updatedHoldings) => {
      setAllHoldings(updatedHoldings); // Update holdings in real-time
    });

    // Clean up socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table className="border-collapse border border-slate-500 w-full">
          <thead>
            <tr>
              <th className="border border-slate-600">Instrument</th>
              <th className="border border-slate-600">Qty.</th>
              <th className="border border-slate-600">Avg. cost</th>
              <th className="border border-slate-600">LTP</th>
              <th className="border border-slate-600">Cur. val</th>
              <th className="border border-slate-600">P&L</th>
              <th className="border border-slate-600">Net chg.</th>
              <th className="border border-slate-600">Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss"; // Adjusted for Tailwind
              const dayClass = stock.day < 0.0 ? "loss" : "profit"; // Adjusted for Tailwind

              return (
                <tr key={index}>
                  <td className="border border-slate-700">{stock.name}</td>
                  <td className="border border-slate-700">{stock.qty}</td>
                  <td className="border border-slate-700">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="border border-slate-700">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className="border border-slate-700">
                    {curValue.toFixed(2)}
                  </td>
                  <td className={`border border-slate-700 ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`border border-slate-700 ${profClass}`}>
                    {stock.net}
                  </td>
                  <td className={`border border-slate-700 p-2 ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className="flex items-center justify-between mt-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <div style={{ textAlign: "center", color: "#000000" }}>
          <h5 style={{ fontSize: "30px" }}>
            29,875.<span style={{ fontSize: "15px" }}>55</span>
          </h5>
          <p style={{ fontSize: "12px", marginTop: "10px" }}>
            Total Investment
          </p>
        </div>
        <div style={{ textAlign: "center", color: "#000000" }}>
          <h5 style={{ fontSize: "30px" }}>
            31,428.<span style={{ fontSize: "15px" }}>95</span>
          </h5>
          <p style={{ fontSize: "12px", marginTop: "10px" }}>Current Value</p>
        </div>
        <div style={{ textAlign: "center", color: "green" }}>
          <h5 style={{ fontSize: "30px" }}>
            1,553.40 <span style={{ fontSize: "15px" }}>(+5.20%)</span>
          </h5>
          <p style={{ fontSize: "12px", marginTop: "10px" }}>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
