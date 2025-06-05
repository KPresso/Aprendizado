// 4) Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
//    comprimentos e diga se é possível formar um triângulo com essas retas.
//    Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
//    lado deve ser menor que a soma dos outros dois.

let prompt = require('prompt-sync')()

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
}