require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Sentry = require('@sentry/node');
const { ProfilingIntegration } = require('@sentry/profiling-node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new ProfilingIntegration()],
  tracesSampleRate: 1.0,
});

const app = express();

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(cors({
  origin: 'http://localhost:3001',
}));
app.use(express.json());

// Aquí vas a importar las rutas
const authRoutes = require('./routes/auth.routes');
const contactsRoutes = require('./routes/contacts.routes');
const auditRoutes = require('./routes/audit.routes');

app.use('/auth', authRoutes);
app.use('/contacts', contactsRoutes);
app.use('/audit-log', auditRoutes);

app.use(Sentry.Handlers.errorHandler());

module.exports = app;