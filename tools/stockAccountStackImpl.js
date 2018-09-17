class Node { //creating a Node class
    constructor(name, price, quat, n) { //constructor
        this.name = name;
        this.price = price;
        this.quat = quat;
        this.next = n;
    }
};

module.exports = class StockAccountStack { //creating a class LinkedList class

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

    push(name, price, quat) {

        this.first = new Node(name, price, quat, this.first);
        this.count++;
    }

    pop(quat) {

        if ((this.first.quat) === (quat)) {

            var n = this.first;

            this.first = n.next;
            this.count--;

        } else {

            var n = this.first;

            n.quat -= quat;
        }
    }

    size() {
        return this.count;
    }

    printList() {

        console.log("Comp."+'\t'+"Stock"+'\t'+"No.of ");
        console.log("Name"+'\t'+"Price"+'\t'+"Share");
        console.log("---------------------");
        console.log();

        if (this.size() === 0) return "[]";

        var n = this.first;
        var str = n.name + '\t' + n.price + '\t' + n.quat + '\t' + '\n';
        while (n.next !== null) {

            n = n.next;
            str += n.name + '\t' + n.price + '\t' + n.quat + '\t' + '\n';
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
                sname: n.name,
                sprice: n.price,
                squantity: n.quat
            }

            return obj;
        }


    }
}