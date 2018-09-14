var fs = require('fs');
var utility = require('../utility/utility.js');

function stock(){

    var read = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/stocksList.json', 'utf8');

    var result = utility.stock(read);
}
stock();