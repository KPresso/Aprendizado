const livraria = [
    {titulo: "Código Limpo", autor: "Martin", ano: 2019},
    {titulo: "The Gunslinger", autor: "Stephen King", ano: 1991},
    {titulo: "Laranja Mecânica", autor: "Nicole", ano: 1810},
    {titulo: "Pequeno Príncipe", autor: "Fabiana", ano: 1903},
    {titulo: "As Crônicas Marciana", autor: "Bradbury", ano: 2010},
]

let c=0

// for (let livro of livraria){ //livro é o valor do objeto que a gente quer, nesse caso, vira o valor do ano
//     if (livro.ano < 2000)
//         console.log(livro)
// }

//contar a quantidade de filmes por gênero

let filmes = [
    {titulo: "Senhor dos Anéis", genero: "Fantasia"},
    {titulo: "Jogo da Imitação", genero: "Histórico"},
    {titulo: "Clube da Luta", genero: "Drama"},
    {titulo: "Ilha do Medo", genero: "Terror"},
    {titulo: "Pulp Fiction", genero: "Ação"},
    {titulo: "Poderoso Chefão", genero: "Máfia"},
    {titulo: "DVD do Renight - Melhores Momentos", genero: "Histórico"},
    {titulo: "Aí, que vida!", genero: "Comédia"},
    {titulo: "Kill Bill", genero: "Ação"},
    {titulo: "Batman Forever", genero: "Herói"},
    {titulo: "Batman - Piada Mortal", genero: "Herói"},
    {titulo: "As Branquelas", genero: "Comédia"},
    {titulo: "Terno de 1 Bilhão de Dólares", genero: "Comédia"},
]

let generoContagem={}

filmes.forEach(filme => {
    if(generoContagem[filme.genero]){
        generoContagem[filme.genero]++
    } else {
        generoContagem[filme.genero] = 1
    }
})

// console.log(generoContagem)



//fatorar o numero

let i=Number, vf = 1, vaux = Number

let val = 3

for (i=0; i<val; i++){
    vaux = val - i
    vf = vaux * vf
}

//console.log(vf)



//imprima os 10 primeiros numeros da sequencia de fibonacci

let v1=0, v2=1, aux

for (i=0; i<10; i++){
    aux = v1 + v2
    v1 = v2
    v2 = aux

    console.log(aux)
}

