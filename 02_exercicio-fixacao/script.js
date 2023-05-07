// EXERCICIO DE FIXAÇÃO
// Prática 2 - Igual e Diferente
// Operadores de igual e diferente recebem duas informações
// e devolvem um booleando, dizendo se é true ou false.
// Sabendo disso, crie uma variável para guardar o resultado
// de cada comparação e imprima o valor no console.

// let comp1 = 5===5 //true
// console.log(comp1, '5 é === a 5?')

// let comp2 = 5!==5 //true
// console.log(comp2, '5 é !== a 5?')

// let comp3 = 5!=='5' //false
// console.log(comp3, '5 é !=="5"')

// let comp4 = "5"==="cinco" //false
// console.log(comp4, '"5" é igual a"cinco"')

// let comp5 = typeof 5===typeof 20 //true
// console.log(comp5, 'typeof 5 é === type of 20')

// let comp6 = typeof "5"===typeof "cinco" //true
// console.log(comp6, '"typeof 5 é === typeof "cinco"')

//Prática 3- Menor ou Maior(ou igual)
//Crie duas variáveis, atribuindo a elas dois número. Utilizando apenas
//os operadores de comparação(>,<,>=,<=), faça as comparações
//entre elas e exiba as seguintes mensagens no console.

// O primeiro número é igual maior ao segundo? true/false
// O primeiro número é menor ou igual ao segundo? true/false
// O primeiro número é maior que o segundo? true/false
// O primeiro número é menor que o segundo? true/false

// const numero1 = 25
// const numero2 = 32

// console.log(numero1 >= numero2)//false
// console.log(numero1 < numero2)//true
// console.log(numero1 <= numero2)//false
// console.log(numero1 > numero2)//true

//FIXAÇÃO 3

// Faça um programa que :
// Pergunte sua idade;
// Pergunte a idade do seu melhor amigo;
// Imprima a seguinte mensagem:"Sua idade é maior que a do seu melhor amigo?",
// seguido pela resposta:true/false.
// Imprima no console a diferença de idade(não tem problema se o número for negativo)

let suaIdade =Number(prompt('Qual sua idade?'))
let idadeAmigo =Number(prompt('Qual a idade do seu melhor amigo?'))
console.log('Sua idade é maior que a do seu melhor amigo?', suaIdade>idadeAmigo)
console.log(suaIdade-idadeAmigo)