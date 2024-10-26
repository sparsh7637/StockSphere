import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const backendUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0.0);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backendUrl}/allOrders`);
        const orderData = response.data;

        const userOrder = orderData.find((order) => order.name === uid);

        if (userOrder) {
          setAvailableQuantity(userOrder.qty);
          setStockPrice(userOrder.price);
        } else {
          toast.error("No matching order found for this stock.");
        }
      } catch (error) {
        toast.error("Error fetching orders.");
        console.error("Error fetching orders", error);
      }
    };

    fetchOrders();
  }, [uid]);

  const handleSellClick = async () => {
    if (stockQuantity > availableQuantity) {
      toast.error("Quantity entered exceeds available quantity!");
      return;
    }

    const updatedQty = availableQuantity - stockQuantity;

    try {
      if (updatedQty > 0) {
        await axios.put(`${backendUrl}/updateOrder`, {
          name: uid,
          qty: updatedQty,
          price: stockPrice,
          mode: "SELL",
        });
        toast.success("Order updated successfully.");
      } else {
        await axios.delete(`${backendUrl}/deleteOrder/${uid}`);
        toast.success("Order deleted successfully.");
      }

      closeSellWindow();
    } catch (error) {
      toast.error("Error processing the order.");
      console.error("Error processing the order", error);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              readOnly
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons mt-6">
        <span>Available quantity: {availableQuantity}</span>
        <div className="flex space-x-2">
          <Link className="btn" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
