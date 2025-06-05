let pares = [['nome', 'joao'], ['sexualidade', 'hetero'], ['idade', 36]]

let objetos = {nome: "Ana", sexualidade: "Hetero", idade: 25}

function parparaobjeto(par)     {
    let objetoconvertido = {}

    for (let indice in par){
        let chave = pares[indice][0]
        let valor = pares[indice][1]
        objetoconvertido[chave] = valor
    }

    return objetoconvertido
}

function objetoprapar(objeto){
    let parconvertido = []

    for (let indice in objeto){
        let s1 = indice
        let s2 = objeto[indice]

        parconvertido.push([s1 , s2])
    }

    return parconvertido
}


console.log(objetoprapar(objetos))
console.log(parparaobjeto(pares))

