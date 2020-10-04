import { LogContext } from './log-context.interface';
import { LogLevel } from '../log-level.enum';

export type LoggingOptions = boolean | 'all' | LogLevel;

export interface ILogger {
  /**
   * Detailed debug information.
   */
  debug(message: string, context?: LogContext): void;

  /**
   * Interesting events.
   *
   * Example: User logs in, SQL logs.
   */
  info(message: string, context?: LogContext): void;

  /**
   * Exceptional occurrences that are not errors.
   *
   * Example: Use of deprecated APIs, poor use of an API, undesirable things
   * that are not necessarily wrong.
   */
  warning(message: string, context?: LogContext): void;

  /**
   * Runtime errors that do not require immediate action but should typically
   * be logged and monitored.
   */
  error(message: string | Error, context?: LogContext): void;

  /**
   * Log a message with level given as an argument
   */
  log(level: LogLevel, message: string | Error, context?: LogContext): void;
}
