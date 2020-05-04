
class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }

}

class Linkedist{
    constructor(){
        this.head = null
    }

    getAt(index){
        let counter = 0
        let node = this.head

        while(node){
            if(counter === index){
                return node
            } else {
                counter++
                node = node.next
            }
        }
        return null
    }

    insertFirst(data){
        const node = new Node(data, this.head)
        this.head = node
    }

    getLast(){
        if(!this.head){
            return null
        }

        let node = this.head
        while(node){
            if(!node.next){
                return node
            }
            node = node.next
        }
    }

    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data)
            return 
        }

        if(index === 0){
            this.head = new Node(data, this.head)
            return
        }

        const previous = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next = node

    }

}