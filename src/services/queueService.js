// src/services/queueService.js
const Queue = require('bull');
const { sendMessage } = require('./whatsappService');

const messageQueue = new Queue('messageQueue', { redis: { host: '127.0.0.1', port: 6379 } });

messageQueue.process(async (job) => {
  const { number, message } = job.data;
  return sendMessage(number, message);
});

function addMessageToQueue(number, message) {
  return messageQueue.add({ number, message });
}

module.exports = { addMessageToQueue };