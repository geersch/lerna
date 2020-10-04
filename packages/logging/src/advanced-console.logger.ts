import chalk from 'chalk';
import { ILogger, LogContext, LoggingOptions } from './interfaces';
import { LogLevel } from './log-level.enum';

export class AdvancedConsoleLogger implements ILogger {
  constructor(private readonly options: LoggingOptions = true) {}

  public debug(message: string, context?: LogContext): void {
    if (
      this.options === true ||
      this.options === 'all' ||
      (typeof this.options === 'number' && this.options <= LogLevel.Debug)
    ) {
      console.debug(chalk.green.underline('debug'), message, context || '');
    }
  }

  public info(message: string, context?: LogContext): void {
    if (
      this.options === true ||
      this.options === 'all' ||
      (typeof this.options === 'number' && this.options <= LogLevel.Info)
    ) {
      console.info(chalk.whiteBright.underline('info'), message, context || '');
    }
  }

  public warning(message: string, context?: LogContext): void {
    if (
      this.options === true ||
      this.options === 'all' ||
      (typeof this.options === 'number' && this.options <= LogLevel.Warning)
    ) {
      console.warn(chalk.keyword('orange').underline('warning'), message, context || '');
    }
  }

  public error(message: string | Error, context?: LogContext): void {
    if (
      this.options === true ||
      this.options === 'all' ||
      (typeof this.options === 'number' && this.options <= LogLevel.Error)
    ) {
      console.error(chalk.red.underline('error'), message, context || '');
    }
  }

  public log(level: LogLevel, message: string | Error, context?: LogContext): void {
    if (message instanceof Error) {
      this.error(message, { error: message.name, stack: message.stack, ...context });
    } else {
      const nameOfLogLevel: string = LogLevel[level].toLowerCase();
      (this as Record<string, any>)[level](nameOfLogLevel, context);
    }
  }
}
