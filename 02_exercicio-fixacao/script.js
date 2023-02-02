// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

console.log('Sua idade é maior do que a do sua amiga?', minhaIdade > idadeAmiga)
console.log(minhaIdade - idadeAmiga)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

//1) Não sou maior de idade e quero passear de carro
//2) Sou maior de idade e vou para a praia, e não quero passear de carro
//3) Vou para a praia ou quero passear de carro
//4) Posso tomar uma cervejinha e não vou passear de carro

// => !b && d
// => (b && a) && !d
// => a || d
// => c && !d

