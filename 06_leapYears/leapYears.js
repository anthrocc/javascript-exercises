const leapYears = function(year) {
    //divisible by 4
    //divisible by 400
    //NOT divisible by 100

    if(year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    else if(year % 100 == 0 && year % 400 == 0) {
        return true;
    }
    return false;

}

// Do not edit below this line
module.exports = leapYears;
