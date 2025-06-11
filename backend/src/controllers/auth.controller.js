const authService = require('../services/auth.service');
const logger = require('../utils/logger');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    logger.error(error);
    res.status(401).json({ error: error.message });
  }
};