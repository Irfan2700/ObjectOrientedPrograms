var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');
var stok = require('../tools/stockAccObj.js');
var fs = require('fs');

function stock() {

    var stock = new stok();
    var a = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/stockSave.json', 'utf8');
    var arr = JSON.parse(a);
   

    utility.stockSelect(arr, readlinesync);

    
}
stock();