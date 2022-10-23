// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

const resp = minhaIdade > idadeAmiga
console.log("Sua idade é maior do que a do seu amigo?", resp)
const resp2 = minhaIdade % idadeAmiga
console.log("diferença de Idade:", resp2)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'
//Não sou maior de idade e quero passear de carro
!b && d
//Sou maior de Idade e vou para a praia e não quero passear de carro
(b && a) && !d
//Vou para a praia ou quero passear de carro
a || d
// posso tomar uma cervejinha e não vou passear de carro
c && !d

//Não sou maior de idade e quero passear de carro
!a && d