// EXERCICIO 01
const suaIdade = prompt("Qual a sua idade?")
const idadeAmigo = prompt("Qual a idade do seu melhor amigo?")
const diferença = idadeAmigo - suaIdade
console.log(diferença) 
const IdComp = suaIdade >= idadeAmigo
const IdCompConsole = console.log(IdComp)
const pergunta = prompt("Sua idade é maior do que a do seu melhor amigo?")  
confirm(IdComp)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'
!b && d
b && a && !d
a || d
c && !d
