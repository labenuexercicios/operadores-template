//CODIGO AQUI


// PRATICA 1
/* const valorProduto = Number(prompt("Insira o valor do produto."))
const percentualDesc = Number(prompt("Insira o Percentual de Desconto."))

const valorDesc = (valorProduto*percentualDesc)/100
const valorFinal = valorProduto - valorDesc

console.log("O valor do deconto é de R$", valorDesc)
console.log("O valor final do produto com desconto é R$", valorFinal)
 */

// PRATICA 2

/* const altura = Number(prompt("Informe sua altura"))
const pesoAtual = Number(prompt("Informe seu peso atual"))
const pesoAnterior = Number(prompt("Informe seu peso anterior")) */  

// formulaIMC = peso / (altura * altura)

/* const imcAtual = pesoAtual / (altura * altura)
const imcAnterior = pesoAnterior / (altura * altura)
    
const imcAtualMaior = imcAtual >= imcAnterior
const imcAtualMenor = imcAtual <= imcAnterior 

console.log("O IMC atual é maior ou igual ao anterior?", imcAtualMaior);

console.log("O IMC atual é menor ou igual ao anterior?", imcAtualMenor); */

//console.log("O IMC atual é menor ou igual ao anterior?", imcAtual <= imcAnterior );

// PRATICA 3


const anoNascUsuario = Number(prompt("Insira o ano de nascimento do usuário"))

const anoNascAcomp = Number(prompt("Insira o ano de nascimento do acompanhante"))  

const anoAtual = 2023

const idadeUsuario = anoAtual - anoNascUsuario
const idadeAcompanhante = anoAtual - anoNascAcomp

const todosDeMaior = idadeUsuario >= 18 && idadeAcompanhante >= 18
const umDelesDeMaior = idadeUsuario >= 18 || idadeAcompanhante >= 18

console.log("O usuário E o seu acompanhante tem maioridade?", todosDeMaior);

console.log("O usuário OU o seu acompanhante tem maioridade?", umDelesDeMaior);

console.log("Ambos não têm maioridade?", !todosDeMaior)


/* console.log("Usuário e acompanhante são de maior?", 
idadeUsuario >= 18 && idadeAcompanhante >= 18);

console.log("Usuário OU acompanhante de maior?", 
idadeUsuario >= 18 || idadeAcompanhante >= 18 );

console.log("Usuário e acompanhante de menor?", 
!(idadeUsuario >= 18 && idadeAcompanhante >= 18)); */





//idadeUsuario <= 18 && idadeAcompanhante <= 18
// são de maior?
// 10 && 11 = false
// !(10 && 11) = true
    // false      


// 18 - 10 = true
// 20 - 22 = true
// 10 - 11 = false