var stock = require('../tools/stockAccountImple.js');
var readlinesync = require('readline-sync');

function stocks(){

    var obj = new stock();

    obj.buy("Ashok lee", 150, 20);
    obj.buy("RPL", 250, 40);
    obj.buy("wipro",140,62)

    console.log(obj);

    obj.sell("RPL",40);
    

    console.log(obj)

}
stocks();
