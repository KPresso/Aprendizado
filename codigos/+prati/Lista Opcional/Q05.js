//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

let prompt = require ('prompt-sync')()

let opcoes = ["pedra", "papel", "tesoura"], esccomputer, escuser


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
    console.log("Você venceu")









