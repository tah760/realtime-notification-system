const { publishMessage, subscribeChannel } = require("../services/pubsub");
const logger = require("../utils/logger");

module.exports = (io) => {

  io.on("connection", (socket) => {
    logger.info(`User connected: ${socket.id}`);

    // Subscribe to Redis channel
    subscribeChannel("notifications", (message) => {
      socket.emit("receive_notification", message);
    });

    socket.on("send_notification", async (data) => {
      logger.info(`Message received: ${data}`);
      await publishMessage("notifications", data);
    });

    socket.on("disconnect", () => {
      logger.info(`User disconnected: ${socket.id}`);
    });
  });

};
