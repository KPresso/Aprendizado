// 1)    Escreva um programa para calcular a redução do tempo de vida de um fumante.
//       Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
//       Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
//       vida um fumante perderá e exiba o total em dias.

/* let prompt = require ('prompt-sync')()


let qcigarros, qanos, mintotais, minperdidos, dias

qcigarros = Number(prompt("Quantos cigarros você fuma por dia?: "))
qanos = Number(prompt("A quantos anos você fuma?: "))

minperdidos = qcigarros * 10

mintotais = minperdidos * (qanos*365)

dias = mintotais/1440

console.log(dias) */




// 2)   Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
//      h
//      -1
//       , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
//       multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

// let prompt = require('prompt-sync')()


/* let velocidade, multa

velocidade = Number(prompt("Insira a velocidade que você passou, em Km/H: "))

if (velocidade > 80) {
    multa = (velocidade-80) * 5

    console.log("Sua multa total foi de : "+ multa + "R$")
}

else {
    console.log("Velocidade certa, siga bem.")
} */




// 3) Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
//    Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
//    R$ 0.45 para viagens mais longas.

/* let prompt = require ('prompt-sync')()

let distancia, preço

distancia = Number(prompt("Insira a distância em KM que foi percorrida"))

distancia <= 200? preço = distancia * 0.5: preço = distancia *0.45

console.log("O preço total foi" +preço+ "R$") */




// 4) Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
//    comprimentos e diga se é possível formar um triângulo com essas retas.
//    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
//    lado deve ser menor que a soma dos outros dois.

/* let prompt = require('prompt-sync')()

let f1=0, f2=0, f3=0, m1, m2, m3

m1 = Number(prompt("Insira sua primeira medida: "))
m2 = Number(prompt("Insira sua segunda medida: "))
m3 = Number(prompt("Insira sua terceira medida: "))

if (m1 + m2 > m3)
    f1 = 1

if (m3 + m2 > m1)
    f2 = 1

if (m3 + m1 > m2)
    f3 = 1

if (f1 == 1 && f2 == 1 && f3 == 1){
    console.log("É possível formar um triangulo")
} */





 //5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

/*let opcoes = ["pedra", "papel", "tesoura"], esccomputer, escuser


esccomputer = Math.floor(Math.random() * 3)


escuser = Number(prompt("1-> Pedra, 2->Papel e 3->Tesoura: "))


console.log("O computador escolheu "+ opcoes[esccomputer])



if (esccomputer == (escuser-1))
    console.log("Empate!!!")

else if (opcoes[escuser-1] == "pedra" && opcoes[esccomputer] == "papel" )
    console.log("Você perdeu")
else if (opcoes[escuser-1] == "pedra" && opcoes[esccomputer] == "tesoura" )
    console.log("Você venceu")

else if (opcoes[escuser-1] == "papel" && opcoes[esccomputer] == "pedra" )
    console.log("Você venceu")
else if (opcoes[escuser-1] == "papel" && opcoes[esccomputer] == "tesoura" )
    console.log("Você perdeu")

else if (opcoes[escuser-1] == "tesoura" && opcoes[esccomputer] == "pedra" )
    console.log("Você perdeu")
else if (opcoes[escuser-1] == "tesoura" && opcoes[esccomputer] == "papel" )
    console.log("Você venceu") */











