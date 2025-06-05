const prompt =  require('prompt-sync')()

// let v1 = Number(prompt("Insira o 1° valor"))
// let v2 = Number(prompt("Insira o 2° valor"))

// let op = Number(prompt('Informe a operação desejada: 1-> Adição 2-> Subtração 3-> Multiplicação 4-> Divisão'))

// let resultado = 0

// switch (op) {
//     case 1: resultado = v1+v2
//     break;

//     case 2: resultado = v1-v2
//     break;

//     case 3: resultado = v1 * v2
//     break;

//     case 4: if (v2 == 0){
//         console.log("Não pode divisão por 0")
//     }   else { 
//             resultado = v1/v2 }
//     break;
// }

// console.log ("seu valor é " +resultado)

let separação = "separação"

// let v = Number(prompt("Insira um valor para checagem"))

// if (v >= 0) {
//     console.log("Valor positivo")
// }

// if (v < 0) {
//     console.log("Valor negativo")
// }

let separação2 = "separação"

// function somar(a,b) {
//     return a+b
// }

// console.log(somar(2,5))

// const prompt = require ('prompt-sync')()

let age = Number(prompt("Insira sua idade"))

const infantil = (age == 0 && age <=12)
const adolescente = (age > 12 && age < 18)
const adulto = (age >= 18 && age <=64)
const idoso = (age >64)

if(!isNaN(age)){
switch (true) {
    case infantil: 
    console.log("Você é criança")
    break;

    case adolescente: 
    console.log("Você é adolescente")
    break;

    case adulto: 
    console.log("Você é adulto")
    break;

    case idoso: 
    console.log("Você é idoso")
    break;
}
}