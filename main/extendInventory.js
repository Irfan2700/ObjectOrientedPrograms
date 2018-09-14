var fs = require('fs');
var utility = require('../utility/utility.js');
var readlinesync = require('readline-sync');
var factory = require('../tools/inventoryFactory.js');

function inventory() {

    var obj = new factory();
    var a1 = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/InventoryObj.json', 'utf8');

    var arr = JSON.parse(a1);

    var arr1 = utility.extendedInventory(arr,readlinesync);
    
    var update = JSON.stringify(arr1);
    console.log(update);
    fs.writeFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/InventoryObj.json', update);

    var arrTotal = [];

    for (var i = 0; i < arr1.length; i++) {

        var objTotal = {
            name: arr1[i].name,
            TotalAmount: arr1[i].price * arr1[i].quantity
        }
        arrTotal.push(objTotal)
    }


    var updateTotal = JSON.stringify(arrTotal);
    console.log(updateTotal);
    fs.writeFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/extendInvenTotal.json', updateTotal)
}
inventory();