require('./tracing');
const express = require('express');
const cors = require('cors');
const logger = require('./utils/logger');

const authRoutes = require('./routes/auth.routes');
const contactsRoutes = require('./routes/contacts.routes');
const auditRoutes = require('./routes/audit.routes'); // si querés usarlo también

const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json()); // importante para que ande POST con JSON

// Rutas
app.use('/auth', authRoutes);
app.use('/contacts', contactsRoutes);
app.use('/audit-log', auditRoutes); // si tenés la ruta de audit

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});