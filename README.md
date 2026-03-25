# Real-Time Notification System

Scalable real-time notification system using WebSockets and Redis Pub/Sub.

## Features
- Real-time messaging via Socket.io
- Redis Pub/Sub for horizontal scaling
- Event-driven architecture
- Logging with Winston
- Dockerized deployment

## Architecture
Client → WebSocket Server → Redis Pub/Sub → Multiple Instances

## Use Cases
- Live notifications
- Chat systems
- Event streaming

## Run

### Docker
docker-compose up --build

### Local
npm install
node app/server.js

## Events

send_notification → publish message  
receive_notification → receive message  

## Future Improvements
- Authentication (JWT)
- Room-based messaging
- Message persistence (DB)
- Kafka integration
