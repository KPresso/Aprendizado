/*dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array. */

let prompt = require('prompt-sync')()

let string, array = []

string = prompt("Insira sua frase: ")

let palavras = string.split(" ")

for (let i=0; i<palavras.length; i++) {
    array[i] = palavras[i]

    console.log(array[i])
}

