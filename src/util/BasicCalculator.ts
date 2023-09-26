export default function basicCalculator(num1: number, num2: number, operator: string) {
  if (num1 && num2) {
    if (operator === '+') {
      return num1 + num2;
    }
    if (operator === '-') {
      return num1 - num2;
    }
    if (operator === '*') {
      return num1 * num2;
    }
    if (operator === '/') {
      return num1 / num2;
    }
  }
  return 0;
}
