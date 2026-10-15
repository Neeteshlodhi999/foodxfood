import { createApp } from './app';
import { logger } from './utils/logger';

const port = parseInt(process.env.PORT || '3000', 10);

const app = createApp();

const server = app.listen(port, () => {
  logger.info(`FoodXFood API server running on http://localhost:${port}`);
  logger.info(`Health check: http://localhost:${port}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  server.close(() => {
    logger.info('Process terminated');
    process.exit(0);
  });
});