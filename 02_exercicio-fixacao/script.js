// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

let comparacaoIdade = minhaIdade > idadeAmiga
console.log("minha idade é maior que o da minha amiga?", comparacaoIdade)

let difIdade = minhaIdade - idadeAmiga
console.log("Diferença de idade", difIdade)





// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b && d 
b && a && !d
a || d
c && !d

