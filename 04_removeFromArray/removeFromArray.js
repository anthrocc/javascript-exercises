const removeFromArray = function(array, ...args) {

    console.log(...args);

    console.log("Array before: " + "[" + array.toString() + "]");

    // if (args.length == 1) {
    //     const index = array.indexOf(args[0]);
    //     array.splice(index, 1);
    //     console.log("Array after: " + "[" + array.toString() + "]");
    //     return array;
    // }
    
    for (let i = 0; i < args.length; i++) {
        if (array.indexOf(args[i]) > -1) {
            array.splice(array.indexOf(args[i]), 1);
        }
    }

    //console.log("Index: " + index);

    console.log("Array after: " + "[" + array.toString() + "]");

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
