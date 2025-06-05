/* Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

let prompt = require('prompt-sync')()

let numero, numerorandom

numerorandom = Math.floor(Math.random()*100)


console.log(numerorandom)

while(numero != numerorandom){
    numero = prompt("Insira seu numero: ")

    if (numero < numerorandom){
        console.log("Mais alto")
    }

    if (numero > numerorandom){
        console.log("Mais baixo")
    }

    if(numero == numerorandom)
        console.log("Parabens acertou")
}
