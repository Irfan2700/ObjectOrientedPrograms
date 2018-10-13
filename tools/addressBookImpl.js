class Node {

    constructor(fname, lname, addr, city, state, zip, phoneNo, next) {

        this.fname = fname;
        this.lname = lname;
        this.addr = addr;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.next = next;
    }
};


module.exports = class addressBook {

    constructor() {

        this.first = null;
        this.last = null;
        this.count = 0;
    }


    indexOf(phoneNo) {

        if (this.first === null) throw "List is Empty";

        else {

            if ((this.first.phoneNo) === (phoneNo)) return 0;

            var n = this.first;


            for (var i = 1; i <= this.size(); i++) {

                if ((n.phoneNo) === (phoneNo)) {
                    return i;
                }
                n = n.next;
            }
            return -1;
        }
    }

    newFile(fname, lname, addr, city, state, zip, phoneNo) {

        if (this.first === null) {

            this.first = new Node(fname, lname, addr, city, state, zip, phoneNo, null);
            this.last = this.first;
            this.count++;
            return;
        }

        this.last.next = new Node(fname, lname, addr, city, state, zip, phoneNo, null);
        this.last = this.last.next;
        this.count++;
    }



    openFile(phoneNo) {

        var index = this.indexOf(phoneNo);

        if (index === 0) {

            var obj = {

                fname: this.first.fname,
                lname: this.first.lname,
                address: this.first.addr,
                city: this.first.city,
                state: this.first.state,
                zip: this.first.zip,
                phoneNo: this.first.phoneNo
            }

            return obj;
        }

        var n = this.first;

        for (var i = 0; i < index-1; i++) {

            n = n.next;
        }
        var obj = {

            fname: n.fname,
            lname: n.lname,
            address: n.addr,
            city: n.city,
            state: n.state,
            zip: n.zip,
            phoneNo: n.phoneNo
        }

        return obj;

    }

    deleteFile(phoneNo) {

        var index = this.indexOf(phoneNo);
        if (index >= this.size()) throw ("Index Out of Bounds!!!");

        else {
            if (this.first === null) return null;

            if (index === 0) {
                var n = this.first;

                this.first = n.next;
                this.count--;

            }
            var n = this.first;

            for (var i = 1; i < index; i++) {

                n = n.next;
            }
            n.next = n.next.next;
            this.count--;
        }
    }

    size(){

        return this.count;
    }


}