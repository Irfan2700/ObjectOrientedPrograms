module.exports = {

    inventory: function (read) {

        var data = JSON.parse(read);
        var riceTotal = (data.rice[0].price * data.rice[0].weight) + (data.rice[0].price * data.rice[0].weight) + (data.rice[0].price * data.rice[0].weight);
        var pulsesTotal = (data.pulses[0].price * data.pulses[0].weight) + (data.pulses[0].price * data.pulses[0].weight) + (data.pulses[0].price * data.pulses[0].weight);
        var wheatTotal = (data.wheat[0].price * data.wheat[0].weight) + (data.wheat[0].price * data.wheat[0].weight) + (data.wheat[0].price * data.wheat[0].weight);

        var total = [{
            rice: {

                Total: riceTotal
            },

            pulses: {
                Total: pulsesTotal
            },

            wheat: {
                Total: wheatTotal
            }
        }];
        return total;
    },

    regexDemo: function (read, firstName, LastName, mob, date) {

        var fullName = firstName + " " + LastName;

        var s1 = read.replace(/<<name>>/i, firstName);
        var s2 = s1.replace(/<<full name>>/i, fullName);
        var s3 = s2.replace(/xxxxxxxxxx/i, mob);
        var s4 = s3.replace(/xx-xx-xxxx/i, date);

        console.log(s4);
    },

    stock: function (read) {

        var data = JSON.parse(read);
        //console.log(data.stock[0]);

        var a = [];
        var stock = data.stock;
        console.log(" ");
        for (var key in stock) {

            console.log("Stock Name : "+data.stock[key].name)
            console.log("The Total Price of share : "+data.stock[key].nShares * data.stock[key].SharePrice);
            console.log(" ");
        }
    }

}