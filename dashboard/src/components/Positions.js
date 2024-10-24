import React, { useState, useEffect } from "react";
import axios from "axios";

const backendUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/allPositions`).then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table className="border-collapse border border-slate-500 w-full">
          <thead>
            <tr>
              <th className="border border-slate-600 p-2 text-left">Product</th>
              <th className="border border-slate-600 p-2 text-left">Instrument</th>
              <th className="border border-slate-600 p-2 text-left">Qty.</th>
              <th className="border border-slate-600 p-2 text-left">Avg.</th>
              <th className="border border-slate-600 p-2 text-left">LTP</th>
              <th className="border border-slate-600 p-2 text-left">P&L</th>
              <th className="border border-slate-600 p-2 text-left">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td className="border border-slate-700 p-2">{stock.product}</td>
                  <td className="border border-slate-700 p-2">{stock.name}</td>
                  <td className="border border-slate-700 p-2">{stock.qty}</td>
                  <td className="border border-slate-700 p-2">{stock.avg.toFixed(2)}</td>
                  <td className="border border-slate-700 p-2">{stock.price.toFixed(2)}</td>
                  <td className={`border border-slate-700 p-2 ${profClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`border border-slate-700 p-2 ${dayClass}`}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
