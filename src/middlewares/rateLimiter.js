const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
  windowMs: 60 * 1000, // 1 min
  max: 10, // max 10 requests per window per IP
  message: { error: 'Too many requests, try again later.' },
});