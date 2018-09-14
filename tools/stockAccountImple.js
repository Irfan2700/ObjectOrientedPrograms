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

    sell(name, quat) {

        var index;
        if (this.first === null) throw "List is Empty";

        else {

            if ((this.first.name) === (name)) index = 0;

            var n = this.first;


            for (var i = 1; i <= this.size(); i++) {

                if ((n.name) === (name)) {
                    index = i;
                }
                n = n.next;
            }
            index = -1;
        }

        if (index >= this.size()) throw ("Index Out of Bounds!!!");

        if ((quat) > (this.first.quat)) return null;

        else {
            if (this.first === null) return null;

            if (index === 0) {

                var n = this.first;

                if ((this.first.quat) === (quat)) {


                    if (index === 0) {
                        var n = this.first;

                        this.first = n.next;
                        this.count--;

                    }

                } else {

                    var n = this.first;

                    n.quat -= quat;
                }
            }

            var n = this.first;

            for (var i = 1; i < index; i++) {

                n = n.next;
            }
            var m = n.next;
            
            if ((this.m.quat) === (quat)) {
                n.next = n.next.next;
                this.count--;
            } else {

                n.quat -= quat;
            }
        }
    }

    size() {
        return this.count;
    }
}