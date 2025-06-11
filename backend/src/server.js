require('./tracing');
const app = require('./app');
const logger = require('./utils/logger');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};

app.use(cors(corsOptions));
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});