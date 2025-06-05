class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor() {
        this.top = null //topo da lista
    }

    push(value){
        let newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
    }

    pop() {
        if(!this.top) //quando não tiver um elemento
            return null

        let poppedValue = tuis.top.value
        this.top = this.top.next
        return poppedValue
    }

   peek (){
    if (!this.top) return null
    return this.top.value
    }

    isEmpty() {
        return this.top ==null
    }
}
