//CODIGO AQUI

let saldo = 15 + 22.40
console.log("saldo inicial", saldo)

saldo = saldo - 12.34
console.log("saldo subtraido", saldo)

saldo = saldo / 3
console.log("saldo dividido", saldo)

saldo = saldo * 3.42
console.log("saldo aplicado", saldo)

saldo = saldo % 3
console.log("resto", saldo)

//ordem
const multESoma = 2*2+2
console.log(multESoma)

const somaEMult = 2*(2+2)
console.log(somaEMult)

//IGUAL E DIFERENTE
// comparaçao de valores == (igualdade)
//comparaçao de valor e tipo === (igualdade)
// comparaçao de valor != (difença)
//comparaçao de valor e tipo !== (diferença)


//comparaçao vai retornar true pq sao do mesmo tipo
let comparacaoIgual = 5 === 5
console.log("comparacaoIgual", comparacaoIgual)

//comparaçao vai retornar false pq sao do mesmo tipo
let comparacaoDiferente = 5 !==5
console.log("comparacao diferente", comparacaoDiferente)

//comparaçao number com uma string (number !== string), por isso é true pq o number é diferente de string
let comparacaoTipo1 = 5 !== "5"
console.log("comparacaoTipo1", comparacaoTipo1)

// != ele ver o valor e o !== ver o valor e o tipo

// sao duas strings porem o seu valor nao é igual
let comparacaoTipo2 = "5" === "cinco"
console.log("comparacaoTipo2",
comparacaoTipo2)

// comparando number com number entao vai ser true. comparando valor e tipo
let comparacaoTipo3 = typeof 5 === typeof 5
console.log("comparacaoTipo3", comparacaoTipo3)

// lendo number === number
let comparacaoTipo4 = typeof 5 === typeof 20
console.log("comparacaoTipo4", comparacaoTipo4)

//MENOR E MAIOR (OU IGUAL)
//criando e declarando variavel: 
const num1 = 2
const num2 = 8
let resultado

//1- O primeiro número é igual ao segundo? 
resultado = num1 === num2
console.log("o primeiro numero é igual aos egundo?", resultado )

//2- O primeiro número é menor ou igual ao segundo? 
resultado = num1 <= num2
console.log("O primeiro número é menor ou igual ao segundo?", resultado)

//3- O primeiro número é maior que o segundo? T
resultado = num1 > num2
console.log("O primeiro número é maior que o segundo?", resultado)

//4- O primeiro número é menor que o segundo? 
resultado = num1 < num2
console.log("O primeiro número é menor que o segundo?", resultado)

//OPERADORES LOGICOS- condições "se, senao"
//NÃO

let a = "Quero dirigir um Celta 2012"
let b = "Sou maior de idade"
let c = "consigo comprar o Celta por 22.000 reais"
let d = "consigo alugar o Celta"
let e = "tenho carteira de motorista"

a
!b
b && !e
b && c || d
b && e && !a





