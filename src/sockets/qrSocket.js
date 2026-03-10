// src/sockets/qrSocket.js
const qrcode = require('qrcode');
const { client } = require('../services/whatsappService');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('Client connected for QR auth');

    client.on('qr', async (qr) => {
      const qrImage = await qrcode.toDataURL(qr);
      socket.emit('qr', qrImage);
    });

    client.on('ready', () => socket.emit('ready'));
  });
};