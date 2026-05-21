const calculadora = require('../models/calculadora');

test("deve somar dois números", function () {
    const resultado = calculadora.somar(2, 2);
    expect(resultado).toBe(4);
});

test("deve somar dois números", function () {
    const resultado = calculadora.somar(5, 100);
    expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro'", function () {
  const resultado = calculadora.somar("Banana", 100);
    expect(resultado).toBe("Erro");
}); 