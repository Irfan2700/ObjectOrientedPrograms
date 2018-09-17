var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');
var stok = require('../tools/stockAccountStackImpl.js');
//var s1 = require('../tools/stockAccObj.js');
var fs = require('fs');

function stock() {

    var objStack = new stok();
    var a = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/stockSaveStack.json', 'utf8');
    var arr = JSON.parse(a);

    // console.log(arr);


    for (var i = 0; i < arr.length; i++) {

        var t = arr[i].squantity;
        if(t <= 0){
            continue;
        }

        objStack.push(arr[i].sname, arr[i].sprice, arr[i].squantity);

    }

    console.log();
    console.log("*********** Welcome to the Stock Market Broker Client 2.0 *************");
    console.log();
    console.log("Please select what you want to do : ")
    console.log();
    console.log("1 : Buy the stock of Company");
    console.log("2 : Sell the stock/share of an existing Company");
    console.log("3 : Display the Account profile ");
    console.log();

    var option = readlinesync.question("Enter 1, 2 or 3 ....");
    if (!(isNaN(option))) {
        switch (parseInt(option)) {

            case 1:
                {
                    var times = readlinesync.question("Enter the Number of company you want to add in the List : ");
                    if (!(isNaN(times))) {
                        console.log();
                        for (var i = 0; i < times; i++) {

                            var cnam = readlinesync.question("Enter the company name : ");
                            if (isNaN(cnam)) {
                                var cpri = readlinesync.question("Enter the price of single Share : ");
                                if (!(isNaN(cpri))) {
                                    var cquat = readlinesync.question("Enter the Share quant : ");
                                    if (!(isNaN(cquat))) {

                                        objStack.push(cnam, cpri, cquat);

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



                        console.log(objStack)
                        var arr1 = [];

                        for (var i = 0; i < objStack.size(); i++) {

                            arr1.push(objStack.get(i));
                        }

                        var a = JSON.stringify(arr1);
                        fs.writeFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/stockSaveStack.json', a);

                        console.log(objStack.printList());
                        break;
                    } else {
                        console.log("Invalid Input!!");
                        break;
                    }
                }

            case 2:
                {
                    console.log();
                    console.log(objStack.printList());
                    console.log();
                    
                        var quant = readlinesync.question("Enter the quantity of Share : ");
                        if (!(isNaN(quant))) {
                            var d = objStack.pop(quant);
                            console.log(objStack.size())
                            var arr1 = [];

                            for (var i = 0; i < objStack.size(); i++) {

                                var t = objStack.get(i).squantity;
                                if(t <= 0){
                                    continue;
                                }
                            
                                arr1.push(objStack.get(i));
                            }

                            d = arr1;
                            if (d === arr1) {
                                d = arr1;
                            }

                            console.log(objStack.printList());
                            var a = JSON.stringify(d);
                            fs.writeFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/stockSaveStack.json', a);

                            console.log(objStack.printList());
                            console.log("Stack Size : "+ objStack.size())
                            break;
                        } else {
                            console.log("Invalid Input!! ");
                            break;
                        }
                   

                }

            case 3:
                {

                    console.log(objStack.printList());
                }

            default:
                console.log("Invalid option Selection!! ...");
        }
    }

    
}
stock();