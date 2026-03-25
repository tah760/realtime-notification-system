const Redis = require("ioredis");
const config = require("../config/config");

const publisher = new Redis(config.REDIS_URL);
const subscriber = new Redis(config.REDIS_URL);

const publishMessage = async (channel, message) => {
  await publisher.publish(channel, JSON.stringify(message));
};

const subscribeChannel = (channel, callback) => {
  subscriber.subscribe(channel);

  subscriber.on("message", (ch, message) => {
    if (ch === channel) {
      callback(JSON.parse(message));
    }
  });
};

module.exports = { publishMessage, subscribeChannel };
