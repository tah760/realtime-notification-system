const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const socketHandler = require("./socket/socketHandler");
const logger = require("./utils/logger");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

socketHandler(io);

app.get("/", (req, res) => {
  res.send("Real-time Notification Server Running");
});

const PORT = 3000;

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
