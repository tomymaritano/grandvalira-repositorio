require('dotenv').config();
const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const logger = require('./utils/logger');
=======
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
>>>>>>> main

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

<<<<<<< HEAD
// Log each request
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`);
  next();
});
=======
// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
>>>>>>> main

// Aquí vas a importar las rutas
const authRoutes = require('./routes/auth.routes');
const contactsRoutes = require('./routes/contacts.routes');
const auditRoutes = require('./routes/audit.routes');

app.use('/auth', authRoutes);
app.use('/contacts', contactsRoutes);
app.use('/audit-log', auditRoutes);

module.exports = app;
