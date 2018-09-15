var stok = require('../tools/stockAccObj.js');
var fs = require('fs');
//var objStock = new stok();

var deckObj = {
    C_2: 1,
    C_3: 2,
    C_4: 3,
    C_5: 4,
    C_6: 5,
    C_7: 6,
    C_8: 7,
    C_9: 8,
    C_10: 9,
    C_J: 10,
    C_Q: 11,
    C_K: 12,
    C_A: 13,

    D_2: 14,
    D_3: 15,
    D_4: 16,
    D_5: 17,
    D_6: 18,
    D_7: 19,
    D_8: 20,
    D_9: 21,
    D_10: 22,
    D_J: 23,
    D_Q: 24,
    D_K: 25,
    D_A: 26,

    H_2: 27,
    H_3: 28,
    H_4: 29,
    H_5: 30,
    H_6: 31,
    H_7: 32,
    H_8: 33,
    H_9: 34,
    H_10: 35,
    H_J: 36,
    H_Q: 37,
    H_K: 38,
    H_A: 39,

    S_2: 40,
    S_3: 41,
    S_4: 42,
    S_5: 43,
    S_6: 44,
    S_7: 45,
    S_8: 46,
    S_9: 47,
    S_10: 48,
    S_J: 49,
    S_Q: 50,
    S_K: 51,
    S_A: 52,

};


module.exports = {

    inventory: function (read) {

        var data = JSON.parse(read);
        var riceTotal = (data.rice[0].price * data.rice[0].weight) + (data.rice[0].price * data.rice[0].weight) + (data.rice[0].price * data.rice[0].weight);
        var pulsesTotal = (data.pulses[0].price * data.pulses[0].weight) + (data.pulses[0].price * data.pulses[0].weight) + (data.pulses[0].price * data.pulses[0].weight);
        var wheatTotal = (data.wheat[0].price * data.wheat[0].weight) + (data.wheat[0].price * data.wheat[0].weight) + (data.wheat[0].price * data.wheat[0].weight);

        var total = [{
            rice: {

                Total: riceTotal
            },

            pulses: {
                Total: pulsesTotal
            },

            wheat: {
                Total: wheatTotal
            }
        }];
        return total;
    },

    regexDemo: function (read, firstName, LastName, mob, date) {

        var fullName = firstName + " " + LastName;

        var s1 = read.replace(/<<name>>/i, firstName);
        var s2 = s1.replace(/<<full name>>/i, fullName);
        var s3 = s2.replace(/xxxxxxxxxx/i, mob);
        var s4 = s3.replace(/xx-xx-xxxx/i, date);

        console.log(s4);
    },

    stock: function (read) {

        var data = JSON.parse(read);
        //console.log(data.stock[0]);

        var a = [];
        var stock = data.stock;
        console.log(" ");
        for (var key in stock) {

            console.log("Stock Name : " + data.stock[key].name)
            console.log("The Total Price of share : " + data.stock[key].nShares * data.stock[key].SharePrice);
            console.log(" ");
        }
    },

    extendedInventory: function (arr, readlinesync) {

        var factory = require('../tools/inventoryFactory.js');
        var fs = require('fs');

        console.log("************* Welcome to the Inventory Manager 2.0 *****************");
        console.log()
        // console.log(arr);
        console.log();
        console.log("Please Select what you need to do : ");
        console.log("1 : Adding a new Product entry in Inventory : " + '\n' +
            "2 : Deleting an existing entry ");
        var option = readlinesync.question("Enter 1 or 2 here : ")
        switch (parseInt(option)) {

            case 1:
                {
                    var times = readlinesync.question("Enter how many entry you need to add : ");
                    var c = 1;
                    for (var i = 0; i < times; i++) {
                        var obj = new factory();
                        var uname = readlinesync.question(`Enter the Name of the Product ${c} : `);
                        var uprice = readlinesync.question(`Enter the Price of the single unit of ${uname} : `);
                        var uquantity = readlinesync.question(`Enter the quantity of ${uname} want to buy : `);
                        obj.name = uname;
                        obj.price = uprice;
                        obj.quantity = uquantity;

                        arr.push(obj);
                        c++;

                    }
                    return arr;

                }

            case 2:
                {

                    var del = readlinesync.question("Enter the product name need to delete :");
                    var a = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/InventoryObj.json', 'utf8');
                    var arr1 = JSON.parse(a);
                    console.log(arr1)
                    var count = 0;
                    for (var i = 0; i < arr1.length; i++) {
                        console.log(arr1[i].name)
                        if ((arr1[i].name) === (del)) {
                            arr1.splice(i, 1);
                            console.log(arr1)
                        }


                    }
                    return arr1;
                }

            default:
                {
                    console.log("Something goes wrong");
                    return
                }
        }


    },

    stockAccount: function (name) {

        var arr = [];
        var d = new Date()
        objStock.sname = name;
        objStock.sprice = null;
        objStock.squantity = null;
        objStock.dateTime = ((d.getDate()) + "/" + (d.getMonth()) + "/" + (d.getFullYear()));

        arr.push(objStock);
        return arr;
    },

    buyStock: function (name, price, quantity) {

        var objStock = new stok();
        var d = new Date()
        objStock.sname = name;
        objStock.sprice = price;
        objStock.squantity = quantity;
        objStock.dateTime = (d.getDate()) + "/" + (d.getMonth()) + "/" + (d.getFullYear());

        return objStock;
    },

    sellStock: function (arr, name, quantity) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].sname === name) {

                if ((arr[i].squantity) === (quantity)) {

                    arr.splice(i, 1);
                } else {

                    arr[i].squantity = arr[i].squantity - (quantity);
                }
            }


        }
        if (arr[i].sname !== name) {
            console.log("Stock is not in your Portfolio ..");
        }

        return arr;
    },

    valueOf: function (arr) {

        var total = 0;
        for (var i = 0; i < arr.length; i++) {

            var t = parseInt(arr[i].sprice) * parseInt(arr[i].squantity);

            total += t;
        }

        return total;
    },

    saveStock(arr) {

        var a = JSON.stringify(arr);
        fs.writeFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/stockSave.json', a);

    },

    printReport() {

        var read = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/stockSave.json', 'utf8');

        var arr = JSON.parse(read);

        console.log((arr));
    },

    stockSelect: function (arr, readlinesync) {

        console.log();
        console.log("*********** Welcome to the Stock Market Broker Client 2.0 *************");
        console.log();
        console.log("Please select what you want to do : ")
        console.log();
        console.log("1 : Buy the stock of Company");
        console.log("2 : Sell the stock/share of an existing Company");
        console.log("3 : To view the total balance of your account");
        console.log("4 : To Print detail report of the accout");

        console.log();

        var option = readlinesync.question("Enter 1, 2, 3 or 4 : ");
        if (!(isNaN(option))) {
            console.log();

            switch (parseInt(option)) {

                case 1:
                    {
                        var n = readlinesync.question("Enter the Number of Company whose Share you want to buy : ");
                        if (!(isNaN(n))) {
                            console.log();
                            for (var i = 0; i < n; i++) {

                                var cnam = readlinesync.question("Enter the company name : ");
                                if (isNaN(cnam)) {
                                    var cpri = readlinesync.question("Enter the price of single Share : ");
                                    if (!(isNaN(cpri))) {
                                        var cquat = readlinesync.question("Enter the Share quant : ");
                                        if (!(isNaN(cquat))) {

                                            var s = this.buyStock(cnam, cpri, cquat);
                                            arr.push(s);
                                        } else {
                                            console.log("Invalid Input!! ");
                                            break;
                                        }
                                    } else {
                                        console.log("Invalid Input!! ");
                                        break;
                                    }
                                } else {
                                    console.log("Invalid Input!! ");
                                    break;
                                }
                            }
                            this.saveStock(arr);
                            this.printReport();
                            break;
                        } else {
                            console.log("Invalid Input!!");
                            break;
                        }

                    }

                case 2:
                    {
                        console.log();
                        console.log(arr);
                        console.log();
                        var del = readlinesync.question("Enter the Stock name to delete : ");
                        if (isNaN(del)) {
                            var qd = readlinesync.question("Enter the quantity of Share : ");
                            if (!(isNaN(qd))) {
                                var d = this.sellStock(arr, del, qd);
                                if (d === arr) {
                                    d = arr;
                                }
                                this.saveStock(d);
                                this.printReport();
                                break;
                            } else {
                                console.log("Invalid Input!! ");
                                break;
                            }
                        } else {
                            console.log("Invalid Input!! ");
                            break;
                        }
                    }

                case 3:
                    {
                        var total = this.valueOf(arr);
                        console.log("The total value of the account : " + total);
                        console.log();
                        break;
                    }

                case 4:
                    {
                        this.printReport();
                        break;
                    }

                default:
                    {
                        console.log("Invalid Option input!!..");

                    }
            }

        } else {
            console.log("Invalid Input!! ");
        }
    },

    // insertionSortDeck: function (arr) {

    //     /**
    //      * @description : To Sort the given array with respect to Number using the Insertion Sort Algorithm
    //      * @param {Number} arr is an array have any Number
    //      */

    //     for (var j = 0; j < 4; j++) {
    //         for (var i = 1; i < arr[i].length; i++) {
    //             var key = parseInt(arr[i]);
    //             var j = i - 1;

    //             while (j > -1 && parseInt(arr[j]) > key) { //shifting the small number into the left most

    //                 arr[j + 1] = arr[j]; //puting the larger number in place of smaller one
    //                 j--;
    //             }

    //             arr[j + 1] = key; //puting the smaller in the left most postion
    //         }
    //         return arr;
    //     }
    // },

    bubbleSortDec: function (arr) {

        /**
         * @description : To Sort the given array with respect to Number using the Bubble Sort Algorithm
         * @param {Number} arr is an array contain any number
         */
        console.log(arr);
        var x = arr[1][1];
        console.log(x);
        if(x === )
        console.log(deckObj.x)
        for(var k=0; k<4; k++){
            
        for (var i = 0; i < arr[k].length - 1; i++) {      
            for (var j = 0; j < arr[k].length - i - 1; j++) {
                
                if (parseInt(deckObj.arr[k][j]) > parseInt(deckObj.arr[k][j + 1])) {  //compare consecutive element of the array
                    var temp = arr[k][j];                  //swaping
                    arr[k][j] = arr[k][j + 1];
                    arr[k][j + 1] = temp;
                }
            }
        }
    }
        return arr;
    },
}