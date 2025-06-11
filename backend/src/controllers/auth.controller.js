const authService = require('../services/auth.service');
const logger = require('../utils/logger');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    logger.error(error);
    error.statusCode = 401;
    next(error);
  }
};