import React, { useState, useEffect } from "react";
import axios from "axios";

const backendUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/allOrders`).then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table className="border-collapse border border-slate-500 w-full">
          <thead>
            <tr>
              <th className="border border-slate-600 p-2 text-left">Name</th>
              <th className="border border-slate-600 p-2 text-left">Price</th>
              <th className="border border-slate-600 p-2 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const price = order.price ? order.price.toFixed(2) : "-";
              const qty = order.qty || "-";

              return (
                <tr key={index}>
                  <td className="border border-slate-700 p-2">{order.name || "-"}</td>
                  <td className="border border-slate-700 p-2">{price}</td>
                  <td className="border border-slate-700 p-2">{qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
