var stok = require('../tools/stockAccObj.js');
//var objStock = new stok();

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
                    break;
                }

            case 2:
                {

                    var del = readlinesync.question("Enter the product name need to delete :");
                    var a = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/InventoryObj.json', 'utf8');
                    var arr1 = JSON.parse(a);
                    console.log(arr1)
                    for (var i = 0; i < arr1.length; i++) {
                        if (arr1[i].name === del) {
                            arr1.splice(i, 1);
                        }
                    }
                    
                }
        }
        return arr;
        
    },

    stockAccount : function(name){

       var arr = [];
        var d = new Date()
        objStock.sname = name;
        objStock.sprice = null;
        objStock.squantity = null;
        objStock.dateTime = ((d.getDate())+"/"+(d.getMonth())+"/"+(d.getFullYear()));

        arr.push(objStock);
        return arr;
    },

    buyStock: function (name, price, quantity) {

        var objStock = new stok();
        var d = new Date()
        objStock.sname = name;
        objStock.sprice = price;
        objStock.squantity = quantity;
        objStock.dateTime = (d.getDate())+"/"+(d.getMonth())+"/"+(d.getFullYear());

        return objStock;
    },

    sellStock: function (arr, name, quantity) {

        for (var i = 0; i < arr.length; i++) {
            if (arr[i].sname === name) {

                if((arr[i].squantity) === (quantity)){

                    arr.splice(i,1);
                 }else{

                     arr[i].squantity =arr[i].squantity - (quantity);
                 }
            }
        }

        return arr;
    },

    valueOf : function(arr){

        var total;
        for(var i=0; i<arr.length; i++){

            var t = arr[i].sprice*arr[i].squantity;

            total += t;
        }

        return total;
    },

    

}