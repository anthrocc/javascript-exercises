const repeatString = function(word, num) {
    
    // Check if num is 0
    if (num == 0) {
        return "";
    }

    //Check for negative numbers 
    if (num <= 0) {
        return "ERROR";
    }

    let result = word;
    
    for (let i = 1; i < num; i++) {
        result = result.concat(word);
        console.log("LOOP RAN");
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
