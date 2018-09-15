var utility = require('../utility/utility.js');
const _ = require('lodash');

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

    var arr = [];
    // for (var i = 0; i < 52; i++) {

    //     arr.push(i + 1);
    // }

    for (var i = 0; i < 52; i++) {
        var f = 0;
        if (i < 13) {
            if (i < 9) {
                f = 0;
                arr[i] = 'C_' + (i + 2 - f);
            } else if (i === 9) {

                arr[i] = 'C_' + 'J';
            } else if (i === 10) {
                arr[i] = 'C_' + 'Q';
            } else if (i === 11) {
                arr[i] = 'C_' + 'K';
            } else if (i === 12) {
                arr[i] = 'C_' + 'A';
            }


        } else if (i > 12 && i < 26) {

            if (i < 22) {
                f = 13
                arr[i] = 'D_' + (i + 2 - f);
            } else if (i === 22) {

                arr[i] = 'D_' + 'J';
            } else if (i === 23) {
                arr[i] = 'D_' + 'Q';
            } else if (i === 24) {
                arr[i] = 'D_' + 'K';
            } else if (i === 25) {
                arr[i] = 'D_' + 'A';
            }
        } else if (i > 25 && i < 39) {

            if (i < 35) {
                f = 26
                arr[i] = 'H_' + (i + 2 - f);
            } else if (i === 35) {

                arr[i] = 'H_' + 'J';
            } else if (i === 36) {
                arr[i] = 'H_' + 'Q';
            } else if (i === 37) {
                arr[i] = 'H_' + 'K';
            } else if (i === 38) {
                arr[i] = 'H_' + 'A';
            }
        } else if (i > 38 && i < 52) {

            if (i < 48) {
                f = 39
                arr[i] = 'S_' + (i + 2 - f);
            } else if (i === 48) {

                arr[i] = 'S_' + 'J';
            } else if (i === 49) {
                arr[i] = 'S_' + 'Q';
            } else if (i === 50) {
                arr[i] = 'S_' + 'K';
            } else if (i === 51) {
                arr[i] = 'S_' + 'A';
            }
        }
    }

    // console.log(arr)
    // console.log(arr.length)
    var arr1 = [];
    for (var i = arr.length - 1; i >= 0; i--) {

        var ranIndex = Math.floor(Math.random() * (i + 1));
        var key = arr[ranIndex];

        arr[ranIndex] = arr[i];
        arr[i] = key;
    }


    //console.log(utility.insertionSort(arr));
    //console.log(arr);
    var n = 0;
    var b = [];
    for (var i = 0; i < 4; i++) {
        var a = [];
        for (var j = 0; j < 9; j++) {

            a.push(arr[n]);
            n++;
        }
        b.push(a);
    }
    //console.log(b);


    console.log(utility.bubbleSortDec(b));
    // console.log(b);
}
deck();