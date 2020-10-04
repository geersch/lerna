export class Calculator {
  public add(...args: number[]): number {
    let total = 0;
    args.forEach((argument: number) => {
      total += argument;
    });

    return total;
  }
}
