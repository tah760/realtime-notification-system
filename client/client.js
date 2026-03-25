const io = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected:", socket.id);

  socket.emit("send_notification", {
    message: "Hello from client",
    time: new Date()
  });
});

socket.on("receive_notification", (data) => {
  console.log("Notification:", data);
});
