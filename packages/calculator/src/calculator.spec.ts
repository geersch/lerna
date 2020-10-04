import { Calculator } from './calculator';

describe('calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should calculate the sum', () => {
    const total: number = calculator.add(2, 3);
    expect(total).toEqual(5);
  });
});
