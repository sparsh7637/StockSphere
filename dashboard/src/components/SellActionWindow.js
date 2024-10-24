import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify"; // Import toast for error handling
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // Reusing the same CSS as BuyActionWindow

const backendUrl =
  process.env.REACT_APP_NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_BACKEND_URL
    : process.env.REACT_APP_PROD_BACKEND_URL;

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext); // Use context to close the window
  const [stockQuantity, setStockQuantity] = useState(1);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [stockPrice, setStockPrice] = useState(0.0);

  // Fetch all orders and find the one matching the stock name (uid)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${backendUrl}/allOrders`);
        const orderData = response.data;

        // Search for the correct order by stock name (uid)
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
        // Update the order quantity
        await axios.put(`${backendUrl}/updateOrder`, {
          name: uid,
          qty: updatedQty,
          price: stockPrice,
          mode: "SELL",
        });
        toast.success("Order updated successfully.");
      } else {
        // Delete the order if quantity is 0
        await axios.delete(`${backendUrl}/deleteOrder/${uid}`);
        toast.success("Order deleted successfully.");
      }

      closeSellWindow(); // Close the window on success
    } catch (error) {
      toast.error("Error processing the order.");
      console.error("Error processing the order", error);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow(); // Close the window on cancel
  };

  return (
    <div className="container" id="sell-window" draggable="true">
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
              value={stockPrice}
              readOnly
              className="border border-gray-300 p-1 w-full rounded focus:outline-none focus:ring focus:border-blue-500"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons mt-6">
        <span className="block text-gray-500 mb-2">
          Available quantity: {availableQuantity}
        </span>
        <div className="flex space-x-2">
          <Link
            className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSellClick}
          >
            Sell
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

export default SellActionWindow;
