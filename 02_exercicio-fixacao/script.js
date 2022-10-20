// EXERCICIO 01

let minhaIdade1 = "Qual sua idade?"
let idadeAmigo1 = "Qual a idade da sua amiga ou amigo?"

let minhaIdade = prompt(minhaIdade1)
let idadeAmiga = prompt(idadeAmigo1)

console.log ("minha idade é maior que meu amigo?",(minhaIdade > idadeAmiga),"!")
console.log ("A diferença de idade é",(minhaIdade - idadeAmiga),"anos.")

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

// não sou maior de idade e quero passear de carro;
// Sou maior de idade e vou para paia, e não quero passear de carro
// vou para a praia ou quero passear de carro
// posso tomar uma cervejinha e não vou passear de carro


!b && d
b && a && !d
a && d
c && !d
