var stock = require('../tools/stockAccountImple.js');
var readlinesync = require('readline-sync');
var s1 = require('../tools/stockAccObj.js');

function stocks(){

    var obj = new stock();
    var objarr = new s1();

    obj.buy("Ashok lee", 150, 20);
    obj.buy("RPL", 250, 40);
    obj.buy("wipro",140,62);
    obj.buy("itc.ltd",547, 74);
    obj.buy("wls",547,74)

    //console.log(obj);

    // obj.sell("wipro",62);
    var arr = [];

    for(var i=0; i<obj.size(); i++){

        arr.push(obj.get(i));
    }

    // console.log(obj.printList())
    // console.log(obj.size());
    
    console.log(arr)

   var objList =new stock();
   
    for (var i = 0; i < arr.length; i++) {

        objList.buy(arr[i].sname, arr[i].sprice, arr[i].squantity);

    }

   // console.log(objList);
}
stocks();
