//operadores aritméticos

let saldo = 15 + 22.40
console.log("Saldo:", saldo)

saldo = saldo - 12.34
console.log("Saldo Atualizado:", saldo)

saldo = saldo / 3
console.log("Valor por Irmão:", saldo)

saldo = saldo * 3.42
console.log("Rendimento da aplicação:", saldo)

saldo = saldo % 3 
console.log("Resto do chiclete:", saldo)

const multipESoma = 2*2+2
console.log("Multiplicação1:", multipESoma)

const multipESoma2 = 2*(2+2)
console.log("Multiplicação2:", multipESoma2)

//operadores relacionais
// = atribuição  
// == comparando o valor 
// === comparando valor e tipo
// !== comparando valor e tipo diferente

const comparacaoIgual = 5 === 5
console.log("Comparação Igual:",comparacaoIgual)

const comparacaoDiferente = 5 !== 5
console.log("Comparação Diferente:",comparacaoDiferente)

const comparacaoTipo1 = 5 !== "5"
console.log("Tipo 1:",comparacaoTipo1)

//comparando valores se for 2 string
const comparacaoTipo2 = "5" === "Cinco"
const exemploTipo2 = "Seis" === "Cinco"
const exemploTipo22 = "Cinco" === "Cinco"
console.log("Tipo 2:", comparacaoTipo2)
console.log("Exemplo Tipo 2:", exemploTipo2)
console.log("Exemplo Tipo 2-2:", exemploTipo22)

//comparando tipos apenas
const comparacaoTipo3 = typeof 5 === typeof 20
const exemploTipo3 = typeof "5" === typeof 20
console.log("Tipo 3:", comparacaoTipo3)
console.log("Exemplo Tipo 3:", exemploTipo2)

//comparando tipos apenas
const comparacaoTipo4 = typeof "5" === typeof "Cinco"
console.log("Tipo 4:", comparacaoTipo4)

let num1 = 2
let num2 = 8

let resultado

resultado = num1 === num2
console.log("O primeiro número é igual ao segundo?", resultado)

resultado = num1 <= num2
console.log("O primeiro número é menor ou igual ao segundo?", resultado)

resultado = num1 >= num2
console.log("O primeiro número é maior ou igual ao segundo?", resultado)

resultado = num1 > num2
console.log("O primeiro número é maior que o segundo?", resultado)

resultado = num1 < num2
console.log("O primeiro número é menor que o segundo?", resultado)

//operadores lógicos

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
b && !e
b && (c || d)
(b && e) && !a

