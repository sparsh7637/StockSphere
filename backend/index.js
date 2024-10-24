require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http"); // Required for creating server with Socket.IO
const { Server } = require("socket.io"); // Importing Socket.IO
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoutes");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();

// Creating HTTP server to use with Socket.IO
const server = http.createServer(app);

// Initializing Socket.IO with CORS options
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://stock-sphere-dashboard.vercel.app",
      "https://stock-sphere-frontend.vercel.app",
    ],
    credentials: true,
  },
});

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://stock-sphere-dashboard.vercel.app",
      "https://stock-sphere-frontend.vercel.app",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   for (const item of tempHoldings) {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     await newHolding.save(); // Ensure save is awaited
//   }

//   res.send("done");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPos = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   for (const item of tempPos) {
//     let newPos = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     await newPos.save();
//   }

//   res.send("Positions added successfully");
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    if (allOrders.length === 0) {
      res.status(404).send("No orders found");
    } else {
      res.json(allOrders);
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.delete("/deleteOrder/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const deletedOrder = await OrdersModel.findOneAndDelete({ name });

    if (deletedOrder) {
      res.send("Order deleted successfully");
    } else {
      res.status(404).send("Order not found");
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

app.put("/updateOrder", async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    const updatedOrder = await OrdersModel.findOneAndUpdate(
      { name },
      { qty, price },
      { new: true } // Returns the updated document
    );

    if (updatedOrder) {
      res.send("Order updated successfully");
    } else {
      res.status(404).send("Order not found");
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


app.get("/allUsers", async (req, res) => {
  let allUsers = await UserModel.find({});
  res.json(allUsers);
});

app.get("/verifyUser", userVerification);

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("saved successfully");
});

// Socket.IO connection and random price update logic
io.on("connection", (socket) => {
  console.log("A client connected:", socket.id);

  // Send random LTP (Last Traded Price) updates every 1 second
  setInterval(async () => {
    let allHoldings = await HoldingsModel.find({});

    // Update the price by multiplying it with a random number between 0.9 and 1.1
    const updatedHoldings = allHoldings.map((stock) => {
      const randomMultiplier = 0.9 + Math.random() * 0.2; // Multiplier between 0.9 and 1.1
      return {
        ...stock._doc, // Spread original stock object (_doc contains the stock data)
        price: stock.price * randomMultiplier, // Update price
      };
    });

    // Emit updated holdings to the client
    socket.emit("holdingsUpdate", updatedHoldings);
  }, 1000); // Send updates every 1 second

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Use server.listen instead of app.listen for Socket.IO to work
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
