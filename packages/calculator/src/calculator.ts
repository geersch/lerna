export class Calculator {
  public add(a: number, b: number, ...args: number[]): number {
    let total = a + b;
    args.forEach((argument: number) => {
      total += argument;
    });

    return total;
  }

  public multiply(a: number, b: number, ...args: number[]): number {
    let total = a * b;
    args.forEach((argument: number) => {
      total *= argument;
    });

    return total;
  }
}
