//1) Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
//formarem uma data real (meses de 28–31 dias, ano bissexto para
//fevereiro) e false caso contrário.


/* let flag = 0;

function ehDataValida(dia, mes, ano){
   if (dia <= 0 && dia >31)
    flag = 1

   if (mes <= 0 && mes > 12)
    flag = 1

   if (ano < 0)
    flag = 1

   if (flag == 1)
    return false

   else 
   return true
}

console.log(ehDataValida(12,12,2000)) */



/* 2) Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

/* let prompt = require('prompt-sync')()

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
} */

/*3) dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array. */

/*let prompt = require('prompt-sync')()

let string, array = []

string = prompt("Insira sua frase: ")

let palavras = string.split(" ")

for (let i=0; i<palavras.length; i++) {
    array[i] = palavras[i]

    console.log(array[i])
} */



