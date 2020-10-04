import { Calculator } from './calculator';

describe('calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add all the numbers', () => {
    const total: number = calculator.add(1, 2, 3);
    expect(total).toEqual(6);
  });

  test('should multiply all the numbers', () => {
    expect(calculator.multiply(1, 2, 3, 4, 5)).toEqual(120);
  })
});
