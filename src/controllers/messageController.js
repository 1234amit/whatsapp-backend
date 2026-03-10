const { sendMessage } = require("../services/whatsappService");

async function sendMessageController(req, res) {
  const { number, message } = req.body;

  try {
    const response = await sendMessage(number, message);
    res.json({
      success: true,
      data: response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = { sendMessageController };