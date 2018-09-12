/*********************************************************************************************************************
 *  Execution       :   1. default node         cmd> node inventory.js 
 *                      
 *  @description    : The Prime Number Program and store only the numbers in that range that are Anagrams.
 * 
 *  @file           :inventory.js
 *  @overview       :inventory module first finds the prime number and then find the anagram numbers.
 *  @module         :inventory - This is optional if expeclictly its an npm or local package
 *  @author         : Irfan2700 <https://github.com/Irfan2700>
 *  @version        : 1.0
 *  @since          : 05-08-2018
 *
 **********************************************************************************************************************/
var fs = require('fs');
var utility = require('../utility/utility');

function inventory() {

    var read = fs.readFileSync('inventory.json', 'utf8');

    var result = utility.inventory(read);
   
    var res = JSON.stringify(result);

    fs.writeFileSync('inventoryTotal.json', res);
    console.log(res);
}
inventory();