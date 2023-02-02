// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

const resultado1 = minhaIdade > idadeAmiga
const resultado2 = minhaIdade - idadeAmiga

console.log(`Sua idade é maior que a do seu melhor amigo? ${resultado1}`)
console.log(`a diferença de idade: ${resultado2}`)


// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

console.log(`Não sou maior de idade e quero passear de carro. ${!b && d}
-
Sou maior de idade e vou para a praia, e não quero passear de carro. ${(b&&a) && !d}
-
Vou para praia ou quero passear de carro. ${a||d}
-
Posso tomar uma cervejinha e não vou passear de carro. ${c && !d}
`)
 teste = a && b
 console.log(teste)
