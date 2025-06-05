//uma classe define os padrões que um elemento nela vai ter
//objetos são instâncias de classes
//classes definem o que serão os objetos

let car = { //objeto
    nome: "mcqueen",
    cor: "vermelha",

    acelear: function(){
        console.log("acelerando")
    }
}

class Car { //classe
    constructor(nome, cor){
        this.nome = nome 
        this.cor = cor
    }
}

let car4 = new Car("mqueen", "vermelho")

class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class SimplyLinkedList{
    constructor() {
        this.head == null //head é o primeiro elemento da lista, precisa ser indicado
    }

    inserirInicio(v){ //"empurra" o valor que tava no head(inicio) pro próximo, então v fica na primeira posição e null fica na segunda
        let novo = new Node(v) //novo vira um objeto do tipo node
        novo.proximo = this.head
        this.head = novo
    }


imprimir () {
    let atual = this.head //atribui um valor chamado atual que é especifico da função imprimir
    let str = ""
    while (atual) { //enquanto atual não for null
        str += atual.valor + "->"
        atual = atual.proximo
    }

    str += "null"
    console.log(str)
}

}

const lista = new SimplyLinkedList()

lista.inserirInicio(10)
lista.inserirInicio(20)
lista.inserirInicio(30)
lista.inserirInicio(40)

lista.imprimir()