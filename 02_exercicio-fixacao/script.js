// EXERCICIO DE FIXAÇÃO

//EXERCICIO DE FIXAÇÃO

let nome = prompt("*** Informe seu nome: ***");
let nomeAmigo = prompt("*** Informe o nome do seu amigo: ***");

let maior;

let minhaIdade = Number(prompt("*** Digite sua idade: ***"));
let idadeAmigo = Number(prompt("*** Digite a idade do seu amigo: ***"));

if(minhaIdade > idadeAmigo){
    maior = "Sim!, Você é mais velho";
}else{
    maior = "Não, Seu amigo é mais velho que você!";
};

console.log("*** O seu nome é ", nome, ", O nome do seu amigo é: ", nomeAmigo, ", Você é mais velho que seu amigo? ", maior, ", Quantos anos de diferença? ", minhaIdade - idadeAmigo, " Anos de diferença. ***");

let numero;
let numero2;


function callback (){
    numero = prompt("Defina um numero: ");
    numero2 = prompt("Defina um numero para a segunda variavel: ");
    if(numero > numero2){
        return "Sim!";
    }
}

console.log(callback());