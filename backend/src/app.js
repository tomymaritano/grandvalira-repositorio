require('dotenv').config();
const express = require('express');
const cors = require('cors');
<<<<<<< HEAD
const cookieParser = require('cookie-parser');
=======
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
>>>>>>> main

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Aquí vas a importar las rutas
const authRoutes = require('./routes/auth.routes');
const contactsRoutes = require('./routes/contacts.routes');
const auditRoutes = require('./routes/audit.routes');

app.use('/auth', authRoutes);
app.use('/contacts', contactsRoutes);
app.use('/audit-log', auditRoutes);

module.exports = app;