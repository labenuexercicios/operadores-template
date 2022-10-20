let saldo = 15 + 22.40;
console.log(`Saldo: ${saldo}`);

saldo -= 12.34;
console.log(`Saldo atualizado: ${saldo}`);

saldo /= 3;
console.log(`Valor por irmão: ${saldo.toFixed(2)}`);

saldo *= 3.42;
console.log(`Valor investido: ${saldo.toFixed(2)}`);

saldo %= 3;
console.log(`Resto para o chiclete: ${saldo.toFixed(2)}`);

const multESoma = 2*2+2;
console.log(`MS1: ${multESoma}`);

const multESoma2 = 2*(2+2);
console.log(`MS2: ${multESoma2}`);

// = atribuição
// == valor
// === valor e tipo
// !== valor e tipo diferente

const comparacaoIgual = 5 === 5;
console.log(`Igual: ${comparacaoIgual}`);

const comparacaoDiferente = 5 !== 5;
console.log(`Diferente: ${comparacaoDiferente}`);

const comparacaoTipo1 = 5 !== "5";
console.log(`Tipo1: ${comparacaoTipo1}`);

const comparacaoTipo2 = "5" === "cinco";
console.log(`Tipo2: ${comparacaoTipo2}`);

const comparacaoTipo3 = typeof 5 === typeof 20;
console.log(`Tipo3: ${comparacaoTipo3}`);

const comparacaoTipo4 = typeof "5" === typeof "cinco";
console.log(`Tipo4: ${comparacaoTipo4}`);

let number1 = 10;
let number2 = 12;
let result;

result = number1 === number2;
console.log(`\nExemplo 1: ${result}`);

result = number1 <= number2;
console.log(`Exemplo 2: ${result}`);

result = number1 > number2;
console.log(`Exemplo 3: ${result}`);

result = number1 < number2;
console.log(`Exemplo 4: ${result}`);

const a = 'Quero dirigir um Celta 2012';
const b = 'Sou maior de idade';
const c = 'Consigo comprar o Celta por 22.000 reais';
const d = 'Consigo alugar o Celta';
const e = 'Tenho carteira de motorista';

// Quero dirigir o Celta 2012
// Não sou maior de idade
// Sou maior de idade e não tenho carteira de motorista
// Sou maior de idade e consigo comprar ou alugar o celta
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta

a
!b
b&&!e
b&&(c||d)
(b&&e)&&!a