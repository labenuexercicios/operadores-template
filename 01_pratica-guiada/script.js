//CODIGO AQUI
let saldo = 15 + 22.40
console.log ("saldo",saldo)

saldo = saldo - 12.34
console.log ("saldo atualizado",saldo)

saldo = saldo / 3
console.log ("valor por irmão",saldo)

saldo = saldo * 3.42
console.log ("valor investido",saldo)

saldo = saldo % 3
console.log ("resto para o chiclete", saldo)

const multipliSoma = 2*2+2
console.log("MS1",multipliSoma)

const multipliSoma2 = 2*(2+2)
console.log("MS2",multipliSoma2)

const comparacaoIgual = 5 === 5
console.log ("5 === 5",comparacaoIgual)

const comparacaoDiferente = 5 !== 5
console.log ("5 !== 5",comparacaoDiferente)

const comparacaoTipo1 = 5 !== "5"
console.log ("5 !== '5'",comparacaoTipo1)

const comparacaoTipo2 = "5" === "cinco"
console.log ("5 === cinco",comparacaoTipo2)

const comparacaoTipo3 = typeof 5 === typeof 20
console.log ("typeof 5 === typeof 20",comparacaoTipo3)

const comparacaoTipo4 = typeof "5" === typeof "cinco"
console.log ("typeof 5 === typeof cinco",comparacaoTipo4)

let num1 = 2
let num2 = 8

let resultado

resultado = num1 === num2
console.log (" o primeiro é igual ao segundo", resultado)

resultado = num1 <= num2
console.log (" o primeiro é menor ou igual ao segundo", resultado)

resultado = num1 > num2
console.log (" o primeiro é maior que o segundo", resultado)

resultado = num1 < num2
console.log (" o primeiro é menor que o segundo", resultado)


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

