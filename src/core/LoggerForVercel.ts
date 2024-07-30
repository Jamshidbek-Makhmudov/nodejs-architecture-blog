import { createLogger, format, transports } from 'winston';
import { environment } from '../config';

// Set the log level based on the environment
const logLevel = environment === 'development' ? 'debug' : 'warn';

// Create and export the logger instance
export default createLogger({
  level: logLevel,
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp(),
    format.prettyPrint(),
  ),
  transports: [
    new transports.Console({
      level: logLevel,
      format: format.combine(
        format.colorize(),
        format.errors({ stack: true }),
        format.timestamp(),
        format.printf(({ timestamp, level, message, stack }) => {
          return `${timestamp} ${level}: ${message}${stack ? `\n${stack}` : ''}`;
        })
      ),
    }),
  ],
  exceptionHandlers: [
    new transports.Console({
      level: logLevel,
      format: format.combine(
        format.colorize(),
        format.errors({ stack: true }),
        format.timestamp(),
        format.printf(({ timestamp, level, message, stack }) => {
          return `${timestamp} ${level}: ${message}${stack ? `\n${stack}` : ''}`;
        })
      ),
    }),
  ],
  exitOnError: false, // Do not exit on handled exceptions
});
