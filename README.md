# StockSphere - Stock Trading Simulator

StockSphere is a full-stack MERN (MongoDB, Express, React, Node) stock trading simulator designed to simulate real-time stock price fluctuations. It allows users to monitor, trade, and manage their portfolio, providing an interactive experience similar to real stock markets.

### Key Features:
- **Real-time Stock Price Simulation**: Utilizes **Socket.IO** to simulate live price movements of various stocks, enhancing the dynamic experience of trading.
- **Full-Stack Implementation**: Built using the MERN stack to provide a seamless user experience with efficient data management and real-time updates.
- **User Portfolio Management**: Manage **holdings**, **positions**, and **orders** with data stored in **MongoDB** for persistence.
- **Backend API**: Powered by **Node** and **Express**, the backend efficiently handles API calls and data transactions.
- **Hosted on Render**: The backend is hosted on **Render**, which may result in a loading delay of around 50 seconds when accessing holdings, positions, or orders for the first time.
- **User Signup & Dashboard**: Upon **signup**, users are redirected to the **dashboard**, which is built using **Tailwind CSS** for a clean and responsive design.
- **Data Visualization**: Integrated **Chart.js** for creating dynamic and interactive charts, providing users with visual insights into stock performance.
