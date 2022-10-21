// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

console.log("sua idade é maior que a da sua ?", minhaIdade > idadeAmiga)
console.log("a diferença é de" , minhaIdade - idadeAmiga, "anos" )


// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

// resultado

!b && d
b && a && !d
a || d
c && !d