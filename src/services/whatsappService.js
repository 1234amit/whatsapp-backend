// // src/services/whatsappService.js
// const { Client, LocalAuth } = require('whatsapp-web.js');
// const { saveSession, loadSession } = require('../utils/sessionManager');

// let client;
// let ready = false;

// function initWhatsApp() {
//   const session = loadSession();
//   client = new Client({
//     authStrategy: new LocalAuth({ clientId: 'client-one' }),
//     puppeteer: { headless: true },
//     session: session || undefined
//   });

//   client.on('authenticated', (session) => saveSession(session));
//   client.on('ready', () => { ready = true; console.log('WhatsApp ready'); });
//   client.on('disconnected', () => {
//     console.log('WhatsApp disconnected, reconnecting...');
//     client.destroy();
//     client.initialize();
//   });

//   client.initialize();
// }

// async function sendMessage(number, message) {
//   if (!ready) throw new Error('Client not ready');
//   const chatId = number.includes('@c.us') ? number : `${number}@c.us`;
//   return client.sendMessage(chatId, message);
// }

// module.exports = { initWhatsApp, sendMessage, client };


// const { Client, LocalAuth } = require("whatsapp-web.js");
// const qrcode = require("qrcode-terminal");

// let client;

// function initWhatsApp(io) {

//   console.log("Initializing WhatsApp client...");

//   client = new Client({
//     // authStrategy: new LocalAuth(),
//     authStrategy: new LocalAuth({
//         clientId: "whatsapp-session"
//     }),
//     puppeteer: {
//       headless: true
//     }
//   });

//   client.on("qr", (qr) => {
//     console.log("QR RECEIVED - Scan with WhatsApp");

//     // Show QR in terminal
//     qrcode.generate(qr, { small: true });

//     // Send QR to frontend via socket
//     if (io) {
//       io.emit("qr", qr);
//     }
//   });

//   client.on("ready", () => {
//     console.log("WhatsApp client initialized and ready!");
//   });

//   client.on("authenticated", () => {
//     console.log("WhatsApp authenticated!");
//   });

//   client.on("disconnected", () => {
//     console.log("WhatsApp disconnected. Reconnecting...");
//     client.initialize();
//   });

//   client.initialize();
// }

// async function sendMessage(number, message) {
//   const chatId = `${number}@c.us`;
//   return client.sendMessage(chatId, message);
// }

// module.exports = { initWhatsApp, sendMessage };


const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

let client;

function initWhatsApp(io) {

  console.log("Initializing WhatsApp client...");

  client = new Client({
    authStrategy: new LocalAuth({
      clientId: "whatsapp-session"
    }),
    puppeteer: {
      headless: true,
      args: ["--no-sandbox"]
    }
  });

  client.on("qr", (qr) => {
    console.log("QR RECEIVED - Scan with WhatsApp");
    qrcode.generate(qr, { small: true });

    if (io) io.emit("qr", qr);
  });

  client.on("authenticated", () => {
    console.log("WhatsApp authenticated!");
  });

  client.on("ready", () => {
    console.log("WhatsApp client ready!");
  });

  client.on("disconnected", (reason) => {
    console.log("WhatsApp disconnected:", reason);
  });

  client.initialize();
}

module.exports = { initWhatsApp };