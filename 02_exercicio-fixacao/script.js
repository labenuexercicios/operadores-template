// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

//outra maneira de fazer usando variavel para o calculo
/* comparacaoIdades = minhaIdade - idadeAmiga
diferencaIdade = minhaIdade - idadeAmiga */

console.log("Sua idade é maior do que a do seu melhor amigo?", minhaIdade>idadeAmiga )
//console.log("Sua idade é maior do que a do seu melhor amigo?", comparacaoIdades )

console.log("A diferença de idade é de", minhaIdade - idadeAmiga, "anos")
//console.log("A diferença de idade é de", diferencaIdade, "anos")

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

// a. não sou maior de idade e quero passear de carro
// b. sou maior de idade e vou para a praia, e não quero passear de carro
// c. Vou para a praia e quero passear de carro
// d. Posso tomar uma cervejinha e não vou passear de carro

/* !b && d
(b && a) && !d
a || d
c && !d */

