// src/index.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');
const { initWhatsApp } = require('./services/whatsappService');
const qrSocket = require('./sockets/qrSocket');
const handleError = require('./utils/errorHandler');

const app = express();
const server = http.createServer(app);
const io = socketIO(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/messages', messageRoutes);

// Socket
qrSocket(io);

// Error handling
app.use(handleError);

// Initialize WhatsApp
// initWhatsApp();

// const { initWhatsApp } = require("./services/whatsappService");

initWhatsApp(io);

server.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT || 3000}`));


