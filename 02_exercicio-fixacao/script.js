// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')
let resposta1 = minhaIdade > idadeAmigo
let resposta2 = minhaIdade - idadeAmigo

console.log("Sua idade é maior que a do seu melhor amigo?", resposta1)
console.log("A diferença entre sua idade e a do seu amigo é:", resposta2)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

// a) Não sou maior de idade e quero passear de carro
// b) Sou maior de idade e vou a praia e não quero passear de carro
// c) vou para praia ou quero passear de carro 
// d)Posso tomar uma cervejinha e não vou passear de carro

!b && d         
(b && a ) && !d 
 a || d 
 c && !d
