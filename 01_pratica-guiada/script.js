//CODIGO AQUI

//Parte 1
let saldo = 15 + 22.40;
console.log("Meu novo saldo é" ,saldo, "reais.");

saldo -= 12.34;
console.log("Agora fiquei com saldo de", saldo, "reias.");

saldo /= 3;
console.log("saldo por irmãos:", saldo.toFixed(2));

saldo *= 3.42;
console.log("Meu valor investido foi de", saldo.toFixed(2));

saldo %= 3;
console.log("saldo final para o chicletinho é de", saldo.toFixed(2));

//Parte 2
let valor1 = 2*2+2;
console.log("Valor é igual a", valor1);

valor1 = 2*(2+2);
console.log("Novo valor é de", valor1);

// Igual e diferente
let compare = 5===5;
console.log("5 === 5?", compare);

compare = 5 !== 5;
console.log("5 !== 5?", compare);

compare = 5 !== "5";
console.log("5 !== '5'?", compare);

compare = "5" === "cinco";
console.log("'5' === 'cinco'?", compare);

compare = typeof 5 === typeof 20;
console.log("typeof5 === typeof20?", compare);

compare = typeof "5" === typeof "cinco";
console.log("typeof '5' === typeof 'cinco'?", compare);

//Menor e maior (ou igual)
const num1 = 2
const num2 = 8

let operation = (num1 == num2);
console.log("O primeiro número é igual ao segundo?", operation);

operation = num1 <= num2;
console.log("O primeiro número é menor ou igual ao segundo?", operation);

operation = num1 > num2;
console.log("O primeiro número é maior que o segundo?", operation);

operation = num1 < num2;
console.log("O primeiro número é menor que o segundo?", operation);

//Lógica

/* a: Quero dirigir um Celta 2012;
b: Sou maior de idade;
c: Consigo comprar o Celta por 22.000 reais;
d: Consigo alugar o Celta;
e: Tenho carteira de motorista; */

console.log("Quero dirigir o Celta 2012: a")
console.log("Não sou maior de idade: !b")
console.log("Sou maior de idade e não tenho carteira de motorista: b && !e")
console.log("Sou maior de idade e consigo comprar ou alugar o celta: b && (c || d)")
console.log("Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o celta: (b && e) && !a")
