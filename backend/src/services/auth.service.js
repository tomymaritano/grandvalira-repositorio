const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt.utils');

exports.login = async (email, password) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  // Generar token
  const token = generateToken(user);
  return { token, role: user.role };
};