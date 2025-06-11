require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

const app = express();

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
}));
app.use(express.json());

// Aquí vas a importar las rutas
const authRoutes = require('./routes/auth.routes');
const contactsRoutes = require('./routes/contacts.routes');
const auditRoutes = require('./routes/audit.routes');

app.use('/auth', authRoutes);
app.use('/contacts', contactsRoutes);
app.use('/audit-log', auditRoutes);

module.exports = app;
