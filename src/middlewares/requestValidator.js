const { body, validationResult } = require('express-validator');

const validateMessage = [
  body('number').isString().notEmpty(),
  body('message').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

module.exports = { validateMessage };