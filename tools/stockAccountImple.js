class Node { //creating a Node class
    constructor(name, price, quat, n) { //constructor
        this.name = name;
        this.price = price;
        this.quat = quat;
        this.next = n;
    }
};

module.exports = class StockAccount { //creating a class LinkedList class

    constructor() { //constructor
        this.first = null; //give initial value of first as null
        this.last = null; //give initial value of last as null
        this.count = 0;
    }

    stockAccount() {

        this.first = new Node(null, null, null, null);
        this.last = this.first;
        this.count++;
    }

    buy(name, price, quat) {

        if (this.first === null) {

            this.first = new Node(name, price, quat, null);
            this.last = this.first;
            this.count++;
            return;
        }

        this.last.next = new Node(name, price, quat, null);
        this.last = this.last.next;
        this.count++;
    }

    indexOf(name){

        if (this.first === null) throw "List is Empty";

        else {

            if ((this.first.name) === (name))  return 0;

            var n = this.first;


            for (var i = 1; i <= this.size(); i++) {

                if ((n.name) === (name)) {
                    return i;
                }
                n = n.next;
            }
            return -1;
        }
    }

    sell(name, quat) {

        var index = this.indexOf(name);
        

        if (index >= this.size()) throw ("");

        else {
            if (this.first === null) return null;

            
            if (index === 0) {

                
                if ((this.first.quat) === (quat)) {

                        var n = this.first;

                        this.first = n.next;
                        this.count--;

                } else {

                    var n = this.first;

                    n.quat -= quat;
                }
            }

            var n = this.first;

            for (var i = 1; i < index-1; i++) {

                n = n.next;
            }
            
            var p = n;
            console.log(n.next.name)
            if ((n.next.quat) === (quat)) {
                console.log("true")
                n.next = n.next.next;
                this.count--;
            } else {

                p.next.quat -= quat;
            }  
    
    }
    }

    size() {
        return this.count;
    }

    printList(){

        if (this.size()===0) return "[]";

        var n = this.first;
        var str = n.name+" "+n.price+" "+n.quat+" "+'\n';
        while(n.next!== null){

            n = n.next;
            str += n.name+" "+n.price+" "+n.quat+" "+'\n';
        }
        return str;
        
     }

     get(index) {

        if (index >= this.size()) throw ("Index Out of Bounds!!!");


        else {
            //var arr = [];
            var n = this.first;
            for (var i = 1; i <= index; i++) {
                n = n.next;
            }
            //var s = ''
            //console.log(this.count);
            var obj = {
                sname : n.name,
                sprice : n.price,
                squantity : n.quat
            }
            
            return obj;
        }


    }
}