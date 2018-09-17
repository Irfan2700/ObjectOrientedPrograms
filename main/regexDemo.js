var fs = require('fs');
var utility = require('../utility/utility.js');
var readlinesync = require('readline-sync');

function formChange(){

    var read = fs.readFileSync('/home/irfan2700/Javascript/Object oriented programs/tools/regexDemoText.txt', 'utf8');

    var firstName = readlinesync.question("Enter your First Name : ");

    if(isNaN(firstName)){
    var lastName = readlinesync.question("Enter your Last Name : ");
    if(isNaN(lastName)){
    var mob = readlinesync.question("Enter your 10-digit Mobile Number : ");
    if(!(isNaN(mob)) & mob.length === 10){
    
    var objd =  new Date();
    var date = objd.getDate()+"/"+(objd.getMonth()+1)+"/"+objd.getFullYear();
    var result = utility.regexDemo(read,firstName,lastName,mob,date)
    }else{console.log("Invalid Input!!...");}    
}else{
        console.log("Invalid Input.. please Enter Name in aphabet format");
    }
}else{
    console.log("Invalid Input.. please Enter Name in aphabet format");
}
}
formChange();