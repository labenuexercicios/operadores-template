//exercicio01

const minhaIdade = prompt("Qual é a sua idade?")
const idadeAmigo = prompt("Qual a idade de seu amigo ou amiga?")
let resposta1 = minhaIdade > idadeAmigo
let resposta2 = minhaIdade - idadeAmigo

console.log("Sua idade é maior que a do seu amigo?", resposta1)
console.log("A diferençaentre sua idade e a do seu amigo é:", resposta2)


//EXERCÍCIO02

const a = "vou a praia"
const b = "sou maior de idade"
const c = "posso tomar uma cervejinha"
const d = "Quero passear de carro"


// a) Não sou maior de idade e quero passear de carro
// b) Sou maior de idade e vou a praia e não quero passear de carro
// c) Vou para praia ou quero passear de carro
// d) Posso tomar uma cervejinha e não quero passear de carro

!b && d
(b && a) && !d
a || d
c && !d