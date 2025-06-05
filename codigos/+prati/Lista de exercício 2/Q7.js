/* Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort. */


let produtos = [{nome: "Celular", preco: 1000.00}, 
                {nome: "Computador", preco: 2000.00}, 
                {nome:"Ci", preco: 50.00 }]




let pordenados = [...produtos].sort(function(a,b){
    return a.preco - b.preco
})

let nomeordenados = pordenados.map(function(produto){
    return produto.nome
})


console.log(nomeordenados)

/* const produtonome = produtos.map(function(produto){
    return produto.nome 
}) */

