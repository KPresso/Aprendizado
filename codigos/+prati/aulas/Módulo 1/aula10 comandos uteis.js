// console.log("Eletronica merda".length)  //diz o tamanho contando o espaço
// console.log("Pokemon".charAt(0))  //informa o caracter na posição
// console.log("Enzo grigol".indexOf('i')  //diz a posiçao da letra
// console.log("Pedro Rodrigues".replace('Pedro', 'Maria clara'))  //troca a palavra da primeira posição pela da segunda
// console.log("Pedro rodrigues".substr(7, 8))  //conta 8 caracteres depois do 7°
// console.log("lol".toUpperCase())  //deixa maiusculo
// console.log("LOL".toLowerCase())  //deixa minusculo
//string.match(/[aeiou]/gi) //verifica se as letras no meio da barra estão na string

// console.log(Math.ceil(9.5))  //arredonda o numero pra cima
// console.log(Math.floor(9.5))  //arredonda o numero pra baixo
// console.log(Math.round(9.5))  //arredonda pro mais proximo
// console.log(Math.sqrt(9.5))  //raiz quadrada do numero
// console.log(Math.cbrt(9,5))  //eleva o 1° numero ao 2°
// console.log(Math.abs(81.12121212))  //exibe só o numero
// console.log(Math.random()*100)  //exibe um numero randomico dentre o primeiro e o segundo valor



// let date = new Date()

// console.log(date.getDate())  //pega o dia
//  console.log(date.getMonth() +1)  //pega o mes
//  console.log(date.getFullYear())  //pega o ano
// console.log(date.toString()  //ano, mês, dia, minuto e segundo

// let date1 = new Date(2025, 7, 5)
// let date2 = new Date(2002, 7, 5)

// console.log(date1.toString())
// console.log(date2.toString())

// console.log(date1.getTime()) //da o resultado em milissegundos
// console.log(date2.getTime())

// let msentredatas = Math.abs(date1.getTime()-date2.getTime()) //diz a diferença entre as datas

// console.log(msentredatas)

// let milissegundospordia = (1*24*60*60*1000)

// console.log("A diferença das datas é " +milissegundospordia + "dias")



// function reverseString(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reverseString("Olá mundo"))


//formatar uma data
// function formatardata(date) {
//     return date.getDate()+ "/" +(date.getMonth()+1) +"/"+ date.getFullYear() 
// }

// console.log(formatardata(date)) //tentar refazer criando data mes e ano como variaveis


// gerar um numero aleatorio

// function numerorandom(n, n2){
//  let nrandom = Math.floor(Math.random() * (n2 - n + 1)) + n
//  return nrandom 
// }

// console.log(numerorandom(1,20))



//contar as vogais de uma string
// function vogais(string){
//     let vogais = string.match(/[aeiou]/gi) //g=global i=insensitive, flags, g diz que vai seguir contando e i diz que nao tem diferença entre minusculo e maiusculo
//     return vogais ? vogais.length: 0
// }

// console.log(vogais('Pedro'))

console.log(Math.round(Math.random()*100))  //exibe um numero randomico dentre o primeiro e o segundo valor



/*const (nome que eu quiser) = (array de objetos).map(function((eu escolho)){
return (chave que eu quiser retornar)
}) */