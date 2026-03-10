// // src/routes/messageRoutes.js
// const express = require('express');
// const router = express.Router();
// const { sendMessageController } = require('../controllers/messageController');
// const rateLimiter = require('../middlewares/rateLimiter');
// const { validateMessage } = require('../middlewares/requestValidator');

// router.post('/send', rateLimiter, validateMessage, sendMessageController);

// module.exports = router;


const express = require("express");
const router = express.Router();

const { sendMessageController } = require("../controllers/messageController");
const rateLimiter = require("../middlewares/rateLimiter");
const { validateMessage } = require("../middlewares/requestValidator");

router.post("/send", rateLimiter, validateMessage, sendMessageController);

module.exports = router;