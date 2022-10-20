//CODIGO AQUI
let saldo = 15 + 22.40

console.log("Saldo", saldo)

saldo = saldo - 12.34

console.log("Saldo atualizado", saldo)
 
saldo = saldo / 3

console.log("Valor de cada irmão", saldo)

saldo = saldo * 3.42

console.log("Valor do investimento", saldo)

saldo = saldo % 3

console.log("Resto para o chiclete", saldo)

// importancia do uso de parenteses

const semparenteses = 2*2+2
const comparenteses = 2*(2+2)

console.log("----------------------------------------------------------")
console.log("Importância do uso de parênteses:")
console.log("2*2+2 =", semparenteses)
console.log("2*(2+2) =", comparenteses)

// replica - menor e igual < - >

const n1 = 5
const n2 = 12

console.log("----------------------------------------------------------")
console.log("operadores relacionais:")
console.log("O primeiro numero é  igual ao segundo?", n1===n2)
console.log("O primeiro numero é menor ou igual ao segundo?", n1<=n2)
console.log("O primeiro numero é  maior que o segundo?", n1>n2)
console.log("O primeiro numero é  menor que o segundo?", n1<n2)


// Comparação

const comparacaoIgual = 5 === 5
console.log("5 === 5?", comparacaoIgual)

const comparacaoDiferente = 5 !== 5
console.log("5 !== 5?", comparacaoDiferente)

const comparacaoNumberString = 5 !== 5
console.log('5 !== "5"', comparacaoNumberString)

const comparacaoStringString = "5"==="cinco"
console.log('"5" === "cinco"', comparacaoStringString)

const comparacaoTypeof1 =  typeof 5 === typeof 20
console.log("typeof5 === typeof20:", comparacaoTypeof1)

const comparacaoTypeof2 = typeof"5" === typeof "cinco"
console.log('typeof"5" === typeof "cinco"', comparacaoTypeof2)
// operadores logicos

const a = "Quero dirigir um celta 2012"
const b = "Sou maior de idade"
const c = "Consigo comprar o celta por 22.000 reais"
const d = "Consigo alugar o celta"
const e = "Tenho carteira de motorista"

// Quero dirigir o Celta 2012
// Não sou maior de idade
// Sou maior de idade e não tenho carteira de motorista
// Sou maior de idade e consigo comprar ou alugar o celta

/* !b
b && !e
b && (c||d)
(b && e) && !a */