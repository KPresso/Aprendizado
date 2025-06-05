//objetos tem coisas, faz coisas e tem um estado
//UM objeto é uma estrutura que representa algo do mundo real


let car = {
    nome: "mcqueen",
    cor: "vermelha",

    acelear: function(){
        console.log("acelerando")
    }
}

let serie = {
    nome: 'High Schoool Musical',
    dataLancamento: 2007,
    atores: ['Zac Efron', 'Client Eastwood', 'Arthur Morgan'],
    status: 'finalizada',
    classicacao: 18,
    nrTemporadas: {
        temp: 12,
        temp2: 1,
        temp3: 0
    },

    mostrarCaracteristicas: function() {
        return `O nome da série é: ${this.nome}, classifação para maiores de ${this.classifação} anos e ela esta ${this.status}`
    }

}


let livro ={
    titulo: 'O hobbit',
    autor: 'J.R.R  Tolkien',
    ano: 1925,

    mostrarCaracteristicas: function() {
        return `O nome do livro é: ${this.titulo}, o autor é ${this.autor} e é do ano ${this.ano}`
    }
}

let atleta = {
    nome: 'Cr7',
   time: 'caxias',
   esporte: 'Futebol',
   melhoramigo: 'Eu',

   celebrarVitoria: function (){
    console.log('YEEEEHAAAAAAAAAAAA')
   }
    
}

//atleta.celebrarVitoria()

//console.log(livro.mostrarCaracteristicas)

function anime(nome, personagemForte, personagemFraco, nota) {
    this.nome = nome
    this.personagemForte = personagemForte
    this.personagemFraco = personagemFraco
    this.nota = nota

    this.mostrarAnime = function(){
        return `
        nome: ${this.nome}
        maisForte: ${this.maisforte}
        maisFraco: ${this.personagemForte}
        nota: ${this.nota}
        `
    }
}

// let naruto = new anime("naruto", "ebisu", "orochimaru", "5")
// console.log(naruto.mostrarAnime())
// let onepiece = new anime ("One piece", "Coby", "ace", "5")
// console.log(onepiece.mostrarAnime())

function jogos(titulo, genero, anolancamento, empresa, jogar){
    return{
        titulo,
        genero,
        anolancamento,
        empresa
    }
}

// let jogo = jogos("Dragon age", "Rpg", "2009", "bioware")

// console.log(jogo)





// let personagens = [['Killua', 'Mustang'], 'Minato', 'Aiorus']

// for (let key in personagens){   //in representa a função 0 entre os elementos
//     // console.log(personagens[key])
// }

// let palavra = 'teste'

// for(let char of palavra){   // of guarda cada letra como um array
//     // console.log(char)
// }






// let professor = {
//     nome:"Stark",
//     disciplina:"fisica",
//     notas:{ // notas é um array
//         aluno1: [2, 5], // aluno 0
//         aluno2: [3, 2] // aluno 1
//     }
// }

// let somaNotas = 0;
// let numeroEstudantes = 0;

// for(let aluno in professor.notas){ // para cada aluno
//     numeroEstudantes++; // somo a quantidade de alunos em notas
//     for(let nota of professor.notas[aluno]){  // para cada nota de aluno
//     somaNotas += nota;
//     }
// }

// let media = somaNotas / numeroEstudantes;
// console.log(media);



const aluno = {nome: "João", idade: 20};

for (let chave in aluno) {
    console.log(chave);       // nome, idade roda as chave
    console.log(aluno[chave]); // João, 20 roda os valores nas chaves (aluno em função da chave)
}

const notas = [2, 4, 6];

for (let nota of notas) {
    // console.log(nota); // 2, 4, 6
}