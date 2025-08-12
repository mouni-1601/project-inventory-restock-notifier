const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logger = require('../config/logger');

const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ username, email, password, phone });
    logger.info(`User registered: ${email}`);
    
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    logger.error('Registration error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    logger.info(`User logged in: ${email}`);
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    logger.error('Login error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { register, login };