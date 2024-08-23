class Node{
    next=null;data=null;
    constructor(data){
        this.data = data;
    }
}
export default class linkedList{
    head=null;tail=null;
    constructor(data){
        if(data){
            this.head = new Node(data);
            this.tail = this.head;
        }
    }
    addTohead(data) { 
        let curr = new Node(data);
        if(this.head == null){this.head = curr;this.tail=curr;return true}
        curr.next = this.head;
        this.head = curr;
        return true;
    }
    addList(args){
        if(args ?? (args!= undefined && args.length>0)){
            for(let x of args){
                if(x!=null) this.addTotail(x);
            }
        }
    }
    addTotail(data) {
        let curr = new Node(data);
        if(this.tail == null) {this.tail = curr;this.head=curr; return true;}
        this.tail.next = curr;
        this.tail = curr;
        return true;
     }
    addToi(data,pos) {
        let curr = this.head;
        let i = 1;
        while(i<pos-1){
            if(curr.next == null) return false;
            curr = curr.next;
            i++;
        }
        if(curr == this.head){this.addTotail(data);return true}
        if(curr==this.tail){this.addTotail(data);return true}
        let nextnext = curr.next;
        curr.next = new Node(data);
        curr.next.next = nextnext;
        return true;
     }
    removeFromhead() { 
        if(this.head == null) return false;
        this.head = this.head.next;
        return true;
    }
    removeFromtail() {
        if(this.head == null) return false;
        let curr = this.head;
        while(curr.next.next!=null){
            curr = curr.next;
        }
        curr.next = null;
        this.tail = curr;
        return true
     }
    removeFromi(pos) {
        if(this.head == null) return false;
        let curr = this.head;
        let i = 1;
        if(pos==1){this.removeFromhead();return true;}
        if(pos==2 && this.size ==2){this.removeFromtail();return true;}
        while(i!=pos-1){
            if(curr.next==null) return false;
            curr = curr.next;
            i++;
        }
        curr.next = curr.next.next;
        return true;
     }
     g(node,prev){
        if(node.next == null) {
            this.tail = this.head;
            node.next = prev;
            this.head = node; 
            return this.head}
        else{
            let next1 = node.next;
            node.next = prev;
            this.g(next1,node)
            return this.head
        }
    }
    
    reverse(i){
        if(i=="i"){
            let curr = this.head,next =null,prev=null;
            this.tail = this.head;
            while(curr!=null){
                next  = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;

        }else if(i=="r"){
            //console.log(this.getLL(this.g(this.head,null)))
            this.g(this.head,null)
        }
        return true;
     }
     getLL(curr){
        let a = [];
        while(curr.next!=null){
            a.push(curr.data);
        }
    }
}
