//CODIGO AQUI
let saldo
console.log(`valor inicial do saldo: ${saldo}`)

//1 operação
saldo = 15
saldo = saldo + 22.4
console.log(`valor final 1 operação: ${saldo}`)

//2 operação
saldo = saldo - 12.34
console.log(`valor do saldo 2 operação: ${saldo}`)

//3 operação
saldo = saldo / 3
console.log(`valor de cada irmão: ${saldo}`)

//4 operação
saldo = saldo * 3.42
console.log(`valor do total do saldo com rendimento: ${saldo}`)

//5 operação
//saldo assumirá o valor do RESTO DA DIVISÃO do dinheiro por 3
saldo = saldo % 3
console.log(`agora tenho: ${saldo}`)

// PRATICA GUIADA 2
const resultado1 = 5 === 5
console.log(resultado1)

const resultado2 = 5 !== 5
console.log(resultado2)

const resultado3 = 5 !== '5'
console.log(resultado3)

const resultado4 = '5' === "cinco"
console.log(resultado4)

const resultado5 = typeof 5 === typeof 20
                // number       number
console.log(resultado5)

const resultado6 = typeof '5' === typeof 'cinco'
                // string         string
console.log(resultado6)

//PRATICA GUIADA 3
const primeiroNumero = 15
const segundoNumero = 24

const compara1 = primeiroNumero === segundoNumero
console.log(`o primeiro numero é igual ao segundo numero? ${compara1}`)

const compara2 = primeiroNumero <= segundoNumero
console.log(`o primeiro numero é menor ou igual ao segundo numero? ${compara2}`)

const compara3 = primeiroNumero > segundoNumero
console.log(`o primeiro numero é maior que o segundo numero? ${compara3}`)

const compara4 = primeiroNumero < segundoNumero
console.log(`o primeiro numero é menor que o segundo numero? ${compara4}`)

//PRATICA GUIADA 4
/*
a: Quero dirigir um Celta 2012;
b: Sou maior de idade;
c: Consigo comprar o Celta por 22.000 reais;
d: Consigo alugar o Celta;
e: Tenho carteira de motorista;

Quero dirigir o Celta 2012 - a
Não sou maior de idade - !b
Sou maior de idade e não tenho carteira de motorista - b && !e
Sou maior de idade e consigo comprar ou alugar o Celta - b && (c||d)
Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta - (b&&e) && !a
*/

