// 1)    Escreva um programa para calcular a redução do tempo de vida de um fumante.
//       Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
//       Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
//       vida um fumante perderá e exiba o total em dias.

let prompt = require ('prompt-sync')()


let qcigarros, qanos, mintotais, minperdidos, dias

qcigarros = Number(prompt("Quantos cigarros você fuma por dia?: "))
qanos = Number(prompt("A quantos anos você fuma?: "))

minperdidos = qcigarros * 10

mintotais = minperdidos * (qanos*365)

dias = mintotais/1440

console.log("Seu total de dias perdidos são: "+dias)

