const prompt = require('prompt-sync')()
// let lista = Array()

// lista['hardware'] = Array()
// lista['hardware'][0] = 'Placa de video'
// lista['hardware'][1] = 'Celular'

// lista['comida'] = ['Arroz'] //ou lista['comida'][0] = 'Arroz'
// lista['comida'][1] = 'Carne'

// console.table(lista)





// valor = 11

// function parouimpar(v) /* v é um parâmetro*/ {
//     let resultado
//     if (valor % 2 ==0) {
//         resultado = 'Par'
//     } else {
//         resultado = 'Impar'
//     }
   
//     return resultado
// }

// let verifica = parouimpar (valor)

// console.log(verifica)





// let numeros = [4, 5, 10, 12, 3, 1, 2]

// function organizar(n) { //função com nome
//     return n.sort((a, b) => a - b)
// }

// let resultado = organizar(numeros)


// console.table(resultado)

// let teste = function () { //função sem nome
//     console.log('AAAAAAAAAAAA')
// }

// teste()




// function showfunction(sucesso, erro) {
//     if(false) {
//         sucesso('Sucesso')
//     }
//     else {
//         erro('Erro')
//     }
// }

// let callsucesso = function (message) {
//     console.log(message)
// }

// let callerro = function(message){
//     console.log(message)
// }

// showfunction(callsucesso, callerro)





//uma função que retorne a soma dos elementos de um array

// function somaarray(v){
//     let soma = 0;

//     for (let i=0; i<v.length; i++){
//         soma += v[i]
//     }

//     return soma
// }

// console.log(somaarray([2,3,4]))





//retorne o maior numero do array

// let a = [2,10,4]

// function maiornumero(v) {
//     let aux;

//     for (let i=0; i<v.length; i++){
//         if (v[i] > v[i-1])
//             aux = v[i]
//     }

//     return aux
// }

// console.log(maiornumero(a)) // ou console.log(maiornumero([2,10,4]))







// let ParOuImpar = function(valor) {
//     let resultado
//     if(valor % 2 === 0) {
//         resultado = 'PAR'
//     } else {
//         resultado = 'ÍMPAR'
//     }
//     return resultado
// }


// function VerificaArrayPares(arr, callback) {
//     let pares = []

//     for(let i = 0; i < arr.length; i++) {

//         let resultado = callback(arr[i])

//         if(resultado == 'PAR'){
//             pares.push(arr[i])
//         }

//     }
//     return pares
// }

// console.log(VerificaArrayPares(([2,5,7,8]), ParOuImpar))