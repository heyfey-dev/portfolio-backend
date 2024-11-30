const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socketIo = require("socket.io");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Create HTTP server from Express app
const server = require("http").Server(app);
// CORS Configuration
const corsOptions = {
    origin: "https://recenttest.netlify.app/", // Replace with your frontend domain
    methods: ["GET", "POST"], // Allow GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization"], // Allow headers
  };

// Initialize Socket.io with the server
const io = socketIo(server);

// Middleware
app.use(cors(corsOptions))
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Routes
app.use("/api/submissions", require("./Routes/Submission"));

// WebSocket connection logic
io.on("connection", (socket) => {
  console.log("New client connected");

  // Emit a message to all connected clients
  socket.emit("welcome", { message: "Welcome to the server!" });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Sync Sequelize and start the server
// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });