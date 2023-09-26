import basicCalculator from '../util/BasicCalculator';

test('basicCalculate', () => {
  expect(basicCalculator(1, 2, '+')).toBe(3);
});

test('basicCalculate', () => {
  expect(basicCalculator(3, 2, '-')).toBe(1);
});

test('basicCalculate', () => {
  expect(basicCalculator(3, 4, '*')).toBe(12);
});

test('basicCalculate', () => {
  expect(basicCalculator(6, 3, '/')).toBe(2);
});
