import { ILogger } from '@geersch/logging';

export class Calculator {
  constructor(private readonly logger?: ILogger) {}

  public add(a: number, b: number, ...args: number[]): number {
    let total = a + b;
    args.forEach((argument: number) => {
      total += argument;
    });

    this.logger?.debug(`Adding ${a}, ${b}${args.length ? ', ' + args.join(', ') : ''}. Result: ${total}`);

    return total;
  }

  public multiply(a: number, b: number, ...args: number[]): number {
    let total = a * b;
    args.forEach((argument: number) => {
      total *= argument;
    });

    this.logger?.debug(`Multiplying ${a}, ${b}${args.length ? ', ' + args.join(', ') : ''}. Result: ${total}`);

    return total;
  }

  public subtract(a: number, b: number, ...args: number[]): number {
    let total = a - b;
    args.forEach((argument: number) => {
      total -= argument;
    });

    this.logger?.debug(`Subtracting ${a}, ${b}${args.length ? ', ' + args.join(', ') : ''}. Result: ${total}`);

    return total;
  }

  public divide(a: number, b: number, ...args: number[]): number {
    let total = a / b;
    args.forEach((argument: number) => {
      total /= argument;
    });

    this.logger?.debug(`Dividing ${a}, ${b}${args.length ? ', ' + args.join(', ') : ''}. Result: ${total}`);

    return total;
  }
}
