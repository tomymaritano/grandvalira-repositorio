let winston;
try {
  winston = require('winston');
} catch (err) {
  winston = null;
}

let logger;
if (winston) {
  logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
    ],
  });
} else {
  logger = {
    info: console.log,
    error: console.error,
    warn: console.warn,
  };
}

module.exports = logger;
