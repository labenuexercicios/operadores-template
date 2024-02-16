//CODIGO AQUI

let saldo = 100
console.log(saldo)

saldo += 22.4
console.log(saldo)

saldo -= 12.34
console.log(saldo)

saldo /= 2
console.log(saldo)

saldo *= 3.40
console.log(saldo)

saldo %= 3
console.log(saldo)

let operacao1 = 5*2+2
console.log(operacao1)

let operacao2 = 5 * (2 + 2)
console.log(operacao2)

const comparacao1 = 5 === 5
console.log(comparacao1)

const comparacao2 = 5 !== 5
console.log(comparacao2)

const comparacao3 = 5 != "5"
console.log(comparacao3) //false mesmo valor, mas tipo diferente

const comparacao4 = 5 !== "5"
console.log(comparacao4) //true, compara tipo e valor

const comparacao5 = "5" === "cinco"
console.log(comparacao5) //false

const comparacao6 = typeof 5 === typeof 20
console.log(comparacao6) //true

const comparacao7 = typeof "5" === typeof "vinte"
console.log(comparacao7) // true

const primeiroNumero = 13
const segundoNumero = 13

const verificacao = primeiroNumero === segundoNumero
console.log(verificacao) // true

const verificacao1 = primeiroNumero <= segundoNumero
console.log(verificacao1) // true

const verificacao2 = primeiroNumero > segundoNumero
console.log(verificacao2) //false

const verificacao3 = primeiroNumero < segundoNumero
console.log(verificacao3) //false