/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function */
import { ILogger, LogContext } from './interfaces';
import { LogLevel } from './log-level.enum';

/**
 * A mock logger that can be used in tests in place of a real logger.
 */
export class MockLogger implements ILogger {
  public debug(message: string, context?: LogContext): void {
    this.log(LogLevel.Debug, message, context);
  }

  public info(message: string, context?: LogContext): void {
    this.log(LogLevel.Info, message, context);
  }

  public warning(message: string, context?: LogContext): void {
    this.log(LogLevel.Warning, message, context);
  }

  public error(message: string | Error, context?: LogContext): void {
    this.log(LogLevel.Error, message, context);
  }

  public log(level: LogLevel, message: string | Error, context?: LogContext): void {}

  public child(context: LogContext): ILogger {
    return this;
  }
}
