// Valor inicial do saldo
let saldo
console.log(saldo)

saldo = 15
console.log(saldo)

// Valor após a primeira alteração
saldo = saldo + 22.4
console.log(saldo)

// Valor após segunda alteração
saldo = saldo - 12.34
console.log(saldo)

// Valor após terceira alteração
saldo = saldo / 3
console.log(saldo)

// Valor após quarta alteração
saldo = saldo * 3.42
console.log(saldo)

// Valor após quinta alteração
saldo = saldo % 3
console.log(`Agora o valor do saldo é: ${saldo}`)

// PRÁTICA GUIADA 2

5 === 5

const resultado1 = 5 === 5
console.log(resultado1)

const resultado2 = 5 !== 5
console.log(resultado2)

const resultado3 = 5 !== '5'
console.log(resultado3)

const resultado4 = '5' === 'cinco'
console.log(resultado4)

const resultado5 = typeof 5 === typeof 20
console.log(resultado5)

// PRÁTICA GUIADA 3

const primeiroNumero = 15
const segundoNumero = 15

// COMPARAÇÃO 1
const compara1 = primeiroNumero === segundoNumero
console.log(`O primeiro número é igual ao segundo? ${compara1}`)

// COMPARAÇÃO 2
const compara2 = primeiroNumero <= segundoNumero
console.log(`O primeiro número é menor ou igual ao segundo? ${compara2}`)

// COMPARAÇÃO 3
const compara3 = primeiroNumero > segundoNumero
console.log(`O primeiro número é maior do que segundo? ${compara3}`)

// COMPARAÇÃO 4
const compara4 = primeiroNumero < segundoNumero
console.log(`O primeiro número é menor do que segundo? ${compara4}`)

// COMPARAÇÃO 5
const compara5 = primeiroNumero !== segundoNumero
console.log(`O primeiro número é diferente do segundo? ${compara5}`)

//PRÁTICA GUIADA 5
/*
a: Quero dirigir um Celta 2012;
b: Sou maior de idade;
c: Consigo comprar o Celta por 22.000 reais;
d: Consigo alugar o Celta;
e: Tenho carteira de motorista;
*/

//Quero dirigir o Celta 2012 => a
//Não sou maior de idade => !b
//Sou maior de idade e não tenho carteira de motorista => b && !e
//Sou maior de idade e consigo comprar ou alugar o Celta => b && (c || d)
//Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta => (b && e) && !a


