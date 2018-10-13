var stock = require('../tools/addressBookImpl.js');
var readlinesync = require('readline-sync');
var s1 = require('../tools/stockAccObj.js');

function stocks(){

    var obj = new stock();
    var objarr = new s1();

    obj.newFile("irfan","rizvi","collector colony","Mumbai","maharashtra", 400072, 1234567890)
    obj.newFile("john","larka","chembur","pune","maharashtra", 456685, 9874563210),

    console.log(obj.openFile(9874563210));

   // console.log(obj);

    // obj.sell("wipro",62);
   

    // console.log(obj.printList())
    // console.log(obj.size());
    

   // console.log(objList);
}
stocks();
