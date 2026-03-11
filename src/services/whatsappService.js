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
      headless: false,
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