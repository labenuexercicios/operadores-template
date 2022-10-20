// EXERCICIO 01
const minhaIdade = Number(prompt('Qual sua idade?'))
const idadeAmiga = Number(prompt('Qual a idade da sua amiga ou amigo?'))
let result;

result = minhaIdade > idadeAmiga;
console.log(`Sua idade é maior do que a do seu melhor amigo? \n${result}`);
result = minhaIdade - idadeAmiga;
console.log(`A diferença de idade é de: ${result}`);

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

!b&&d
b&&a&&!d
a||d
c&&!d