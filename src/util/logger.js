const logger = require('winston')

logger.remove(logger.transports.Console)

logger.add(new logger.transports.Console({
  level: process.env.LOG_LEVEL || 'info',
  format: logger.format.combine(
    logger.format.colorize(),
    logger.format.timestamp()
  )
}))

module.exports = logger
