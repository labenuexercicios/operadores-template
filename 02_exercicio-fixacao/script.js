// EXERCICIO 01
const minhaIdade = prompt('Qual sua idade?')
const idadeAmiga = prompt('Qual a idade da sua amiga ou amigo?')

let compare = minhaIdade > idadeAmiga;
console.log("Sua idade é maior do que a do seu melhor amigo?", compare);

compare = minhaIdade - idadeAmiga;
console.log("A diferença de idade é de", compare, "anos.")

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

console.log("Não sou maior de idade e quero passear de carro; !b && d:",!b && d);
console.log("Sou maior de idade e vou para a praia, e não quero passear de carro; (b && a) && !d:",(b && a) && !d );
console.log("Vou para a praia ou quero passear de carro; a || d:", (a||d) );
console.log("Posso tomar uma cervejinha e não vou passear de carro; c&&!d",c&&!d );
