// EXERCICIO DE FIXAÇÃO

minhaIdade = Number(prompt("Qual a sua Idade: "))
idadeAmigo = Number(prompt("Qual a Idade do seu melhor Amigo: "))

console.log("Sua idade é maior que a do seu melhor amigo? ",minhaIdade > idadeAmigo)
console.log("Diferença de Idade ", Math.abs(minhaIdade - idadeAmigo), "Anos")

// comando math.abs torna o resultado sempre positivo para não ter idade negativa
