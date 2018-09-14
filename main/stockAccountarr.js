var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');
var stok = require('../tools/stockAccObj.js');

function stock() {

    var arr = [];

    var n = readlinesync.question("Enter the Number of Company : ")
    //var arr = utility.stockAccount("BridgeLabz");

    for (var i = 0; i < n; i++) {

        var cnam = readlinesync.question("Enter the company name : ");
        var cpri = readlinesync.question("Enter the price of single Share : ");
        var cquat = readlinesync.question("Enter the Share quant : ");

        var s = utility.buyStock(cnam, cpri, cquat);
        arr.push(s);
    }

    console.log(arr);
    var del = readlinesync.question("Enter the name to delete : ");
    var qd = readlinesync.question("Enter the quantity of Share : ");
    var d = utility.sellStock(arr, del, qd);
    console.log(d);

}
stock();