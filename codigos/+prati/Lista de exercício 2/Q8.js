/* Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */


let vendas = [{cliente: "João", total: 100}, 
              {cliente: "Julia", total: 50},
              {cliente: "João", total: 50},
              {cliente: "Julia", total: 100},
              {cliente: "Daniel", total: 20}
]

let totalcliente = vendas.reduce(function(acumulador,vendaatual){
    let cliente = vendaatual.cliente
    let total = vendaatual.total

    if(acumulador[cliente]){
        acumulador[cliente] += total
    }
    else {
        acumulador[cliente] = total
    }


    return acumulador
}, {})

console.log(totalcliente)