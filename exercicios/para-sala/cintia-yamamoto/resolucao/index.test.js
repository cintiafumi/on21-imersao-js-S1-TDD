const {checkEvenNumber} = require('./resolucao')

describe('Função de Conversão', () => {
  test('Deve converter 60°C em Fahrenheit', () => {
    const res = checkEvenNumber("banana")
    expect(res).toBe('banana')
  });
});

describe("Sum function", () => {
  test("sum(5,1) = 6", () => {
      expect(sum(5, 1)).toEqual(6);
  });

  test("(1, 1) => 6)", () => {
      expect(sum(1, 1)).toEqual(6);
  });
});