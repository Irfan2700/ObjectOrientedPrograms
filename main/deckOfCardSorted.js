var utility = require('../utility/utility.js');


var deckObj = [{
    C_2: 1,
    C_3: 2,
    C_4: 3,
    C_5: 4,
    C_6: 5,
    C_7: 6,
    C_8: 7,
    C_9: 8,
    C_10: 9,
    C_J: 10,
    C_Q: 11,
    C_K: 12,
    C_A: 13,

    D_2: 14,
    D_3: 15,
    D_4: 16,
    D_5: 17,
    D_6: 18,
    D_7: 19,
    D_8: 20,
    D_9: 21,
    D_10: 22,
    D_J: 23,
    D_Q: 24,
    D_K: 25,
    D_A: 26,

    H_2: 27,
    H_3: 28,
    H_4: 29,
    H_5: 30,
    H_6: 31,
    H_7: 32,
    H_8: 33,
    H_9: 34,
    H_10: 35,
    H_J: 36,
    H_Q: 37,
    H_K: 38,
    H_A: 39,

    S_2: 40,
    S_3: 41,
    S_4: 42,
    S_5: 43,
    S_6: 44,
    S_7: 45,
    S_8: 46,
    S_9: 47,
    S_10: 48,
    S_J: 49,
    S_Q: 50,
    S_K: 51,
    S_A: 52,

}];

function deck() {

    
    var arr = utility.deckOfCard();

    console.log(utility.bubbleSortDec(arr));
     //console.log(arr);

    //  for(var i=0; i<arr.length; i++){
    //      for(var j=0; j<arr[i].length; j++){

    //         arr[i].sort();
    //      }
    //  }

    //console.log(arr)
}
deck();