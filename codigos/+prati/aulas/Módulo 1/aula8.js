const prompt = require ('prompt-sync')()

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let soma = 0, media, npares = [], c = 0;

// soma = numeros.reduce((acumulador, valor) => acumulador + valor,0)

// media = soma/numeros.length

// pares = numeros.filter (num => num % 2 == 0) //o 1° num é o numero, depois da "seta" é a condição

// console.table(numeros)
// console.log(soma)
// console.log(media)
// console.table(pares)


// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.
// Use métodos de array para calcular:
// A soma de todos os elementos.
// A média dos elementos.
// Gere um novo array chamado pares que contenha apenas os números pares de numeros.
// Imprima no console:
// O array original 'numeros'
// A soma
// A média
// O array pares



// let numeros = [9, 2, 23, 4, 5, 10, 1, 8]
// let n = numeros.length

// for (let i=0; i<n; i++){
//     console.log(i)

//         for (let j=0; j < n-1-i; j++){
//             console.log(j)

//             if (numeros[j]> numeros[j+1]){
//                 const temp = numeros[j]
//                 numeros[j] = numeros[j+1]
//                 numeros[j+1] = temp
//             }
//         }
// }

// console.table(numeros)

// console.table(numeros.sort((a,b) => a-b)) //mesma coisa


let matriz = [], soma = 0, j=0

for (let i=0; i<10; i++){
    matriz[i] = [j]
    for (j=0; j<10; j++){
        matriz[i][j] = i+j

        if (i==j){
            soma = soma + matriz[i][j]
        }
    }
}


console.table(matriz)

console.log(soma)
