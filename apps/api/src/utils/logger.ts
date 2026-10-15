import winston from 'winston';

const logLevel = process.env.LOG_LEVEL || 'info';

export const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'foodxfood-api' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp, ...meta }) => {
          return `${timestamp} [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
        })
      ),
    }),
  ],
});

// Never log sensitive data
export function sanitizeLogData(data: unknown): unknown {
  if (typeof data === 'string') {
    return data
      .replace(/Bearer [A-Za-z0-9_-]+/g, 'Bearer [REDACTED]')
      .replace(/password[^:]*/gi, 'password [REDACTED]');
  }
  return data;
}