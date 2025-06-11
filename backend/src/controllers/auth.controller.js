const authService = require('../services/auth.service');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, role } = await authService.login(email, password);
    res.cookie('token', token, { httpOnly: true, sameSite: 'lax' });
    res.json({ role });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.session = (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
  res.json({ role: req.user.role });
};

exports.logout = (req, res) => {
  res.clearCookie('token');
  res.json({ ok: true });
};