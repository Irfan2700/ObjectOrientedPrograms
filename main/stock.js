var fs = require('fs');
var utility = require('../utility/utility.js');

function stock(){

    var read = fs.readFileSync('stocksList.json', 'utf8');

    var result = utility.stock(read);
}
stock();