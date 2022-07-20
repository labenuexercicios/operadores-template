//CODIGO AQUI

const minhaIdade = prompt("Qual sua idade?");
const idadeAmiga = prompt("Qual a idade da sua amiga ou amigo?");
console.log("Sua idade é maior que a do seu amigo ou amiga?", minhaIdade > idadeAmiga);

const diferencaIdades = Number(minhaIdade) - Number(idadeAmiga);
console.log(diferencaIdades);


const a = "vou pra praia";
const b = "sou maior de idade";
const c = "posso tomar uma cervejinha";
const d = "quero passear de carro";

!b && d;
(b && a) && !d;
a || d;
c && !d;




