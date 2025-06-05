// 3) Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
//    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
//    R$ 0.45 para viagens mais longas.

let prompt = require ('prompt-sync')()

let distancia, preço

distancia = Number(prompt("Insira a distância em KM que foi percorrida"))

distancia <= 200? preço = distancia * 0.5: preço = distancia *0.45

console.log("O preço total foi" +preço+ "R$")
